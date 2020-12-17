import { Inject, Injectable, Optional } from '@angular/core';
import { URI } from 'vscode-uri';
import { BehaviorSubject, Observable, Subject, Subscription } from 'rxjs';

import {
    requireNonNull,
    requireNonNullArray,
    requireTrue,
} from '@platon/shared/utils';
import { Paths } from '../../utils/paths';
import { IEntry, FileEntry, FolderEntry } from './entries';
import {
    FileSystemProvider,
    IFileChange,
    FileChangeType,
    FILE_SYSTEM_PROVIDERS,
} from './providers';
import { SearchQuery, SearchResult } from './search';

@Injectable()
export class FileService {
    private readonly entries: Map<string, IEntry> = new Map();
    private readonly children: Map<string, IEntry[]> = new Map();
    private readonly opened: Map<string, FileEntry> = new Map();
    private readonly contents: Map<string, string> = new Map();

    private readonly providers = new Map<string, FileSystemProvider>();
    private readonly subscriptions: Subscription[] = [];
    private readonly _onDidChangeFile: Subject<IFileChange[]> = new Subject();
    private readonly _onWillChangeFile: Subject<IFileChange[]> = new Subject();
    private readonly _onWillRefresh: Subject<void> = new Subject();
    private readonly _onDidRefresh: Subject<void> = new Subject();
    private readonly _roots = new BehaviorSubject<IEntry[]>([]);

    readonly $roots: Observable<IEntry[]> = this._roots.asObservable();
    readonly $onDidChangeFile: Observable<IFileChange[]> = this._onDidChangeFile.asObservable();
    readonly $onWillChangeFile: Observable<IFileChange[]> = this._onWillChangeFile.asObservable();
    readonly $onDidRefresh: Observable<void> = new Subject();
    readonly $onWillRefresh: Observable<void> = new Subject();


    constructor(
        @Optional()
        @Inject(FILE_SYSTEM_PROVIDERS)
        providers: FileSystemProvider[]
    ) {
        (providers || []).forEach(this.registerProvider.bind(this));
    }

    /**
     * Registers a file system provider for a certain scheme.
     * @param provider The
     */
    registerProvider(provider: FileSystemProvider): void {
        requireNonNull(provider, 'provider');
        if (this.providers.has(provider.scheme)) {
            throw new Error(`A provider for the scheme ${provider.scheme} is already registered.`);
        }

        this.providers.set(provider.scheme, provider);

        this.subscriptions.push(
            provider.onDidChangeFile.subscribe((e) => {
                this._onDidChangeFile.next(e);
            })
        );
    }

    /** Checks if this file service can handle the given uri. */
	canHandleURI(uri: URI): boolean {
		return this.providers.has(uri.scheme);
	}

    markAsOpened(file: FileEntry): void {
        requireNonNull(file, 'file');
        this.opened.set(file.path, file);
    }

    markAsClosed(file: FileEntry): void {
        requireNonNull(file, 'file');
        this.opened.delete(file.path);
        this.contents.delete(file.path);
    }

    isOpened(file: FileEntry): boolean {
        requireNonNull(file, 'file');
        return this.opened.has(file.path);
    }

    find(uri: string | URI | IEntry): IEntry | undefined {
        requireNonNull(uri, 'uri');

        if (uri instanceof URI) {
            uri = uri.path;
        }

        if (uri instanceof FileEntry || uri instanceof FolderEntry) {
            return uri;
        }

        uri = uri as string;
        if (!uri.startsWith('/')) {
            uri = '/' + uri;
        }

        return this.entries.get(uri);
    }

    findAll(predicate: (entry: IEntry) => boolean): IEntry[] {
        const entries = [];
        for (const pair of this.entries) {
            if (predicate(pair[1])) {
                entries.push(pair[1]);
            }
        }
        return entries;
    }

    findChildren(entry: IEntry): IEntry[] {
        return this.children.get(entry.path) || [];
    }

    findPredicate(predicate: (entry: IEntry) => boolean): IEntry | undefined {
        for (const pair of this.entries) {
            if (predicate(pair[1])) {
                return pair[1];
            }
        }
        return undefined;
    }

    /**
     * Removes redundant entries from the list.
     *
     * A redundant item is an item in the list whose parent is also present.
     *
     * Ex. If B is a child of A then B will be removed from the list.
     * @param entries The entries to normalize.
     */
    normalize(entries: IEntry[]) {
        const nodes: IEntry[] = [];
        entries.forEach((n1) => {
            if (
                !entries.some(
                    (n2) => n1.path !== n2.path && n1.path.startsWith(n2.path)
                )
            ) {
                nodes.push(n1);
            }
        });
        return entries;
    }

    writeFileToCache(file: FileEntry, content: string) {
        this.contents.set(file.path, content);
    }

    readFileFromCache(file: FileEntry): string {
        return this.contents.get(file.path) || '';
    }

    /**
     * Reads the entire contents of the given `file` from the server.
     *
     * @param file The file to read.
     * @return A  promise that resolves once the file is readed.
     * @throws [`FileNotFound`](#FileSystemError.FileNotFound) when `uri` doesn't exist.
     */
    async readFile(
        file: FileEntry | URI | string
    ): Promise<void> {
        let uri: URI;
        if (file instanceof FileEntry) {
            uri = file.uri;
        } else if (file instanceof URI) {
            uri = file;
        } else {
            uri = URI.parse(file);
        }

        if (this.contents.has(uri.path)) {
            return;
        }

        const provider = await this.withProvider(uri);
        const response = await provider.readFile(uri);
        this.contents.set(uri.path, response.content);
    }

    /**
     * Write data to a file in the server, replacing its entire contents.
     *
     * @param entry The file to update.
     * @throws [`FileNotFound`](#FileSystemError.FileNotFound) when `uri` doesn't exist and `create` is not set.
     * @throws [`FileNotFound`](#FileSystemError.FileNotFound) when the parent of `uri` doesn't exist and `create` is set, e.g. no mkdirp-logic required.
     * @throws [`FileExists`](#FileSystemError.FileExists) when `uri` already exists, `create` is set but `overwrite` is not set.
     * @throws [`NoPermissions`](#FileSystemError.NoPermissions) when permissions aren't sufficient.
     */
    async writeFile(entry: FileEntry) {
        const provider = await this.withProvider(entry.uri);
        await provider.writeFile(
            entry.uri,
            this.contents.get(entry.path) || '',
            true
        );
    }

    async createFile(
        parent: FolderEntry, name: string
    ): Promise<void> {
        await this.createEntry(parent, 'file', name);
    }

    async createFolder(
        parent: FolderEntry,
        name: string
    ): Promise<void> {
        await this.createEntry(parent, 'folder', name);
    }

    async rename(
        entry: IEntry, newName: string
    ): Promise<void> {
        if (entry.name === newName.trim()) {
            return;
        }
        const provider = await this.withProvider(entry.uri);
        await provider.rename(entry.uri, newName);
        this.doRemove(entry);
        if (entry.isFolder) {
            const newUri = entry.uri.with({
                path: Paths.normalize(Paths.join([entry.parent, newName])),
            });
            (await provider.readDirectory(newUri)).forEach((v) => {
                const e = this.find(v.parent);
                if (e) {
                    this.doCreate(v, e);
                }
            });
        } else {
            const parent = this.find(entry.parent);
            if (parent) {
                this.doCreate(FileEntry.withParent(parent, newName), parent);
            }
        }
        this.notifyChanges();
    }

    async delete(
        entry: IEntry
    ): Promise<void> {
        await this.doDelete(entry);
        this.notifyChanges();
    }

    async deleteAll(
        entries: IEntry[]
    ) {
        requireNonNullArray(entries, 'resources');
        entries.forEach((r) => {
            requireTrue(r.write, 'permission denied');
            requireTrue(!r.isRoot, 'permission denied');
        });

        try {
            await Promise.all(entries.map(this.doDelete.bind(this)));
        } finally {
            this.notifyChanges();
        }
    }

    async move(
        source: IEntry, destination: IEntry
    ): Promise<void> {
        await this.doMove(source, destination);
    }

    async copy(
        source: IEntry[], destination: IEntry
    ) {
        const entries = this.normalize(source);
        if (entries.length) {
            for (const entry of entries) {
                await this.doMove(entry, destination, true);
            }
        }
    }

    async createZip(
        entry: IEntry
    ) {
        const provider = this.withProvider(entry.uri);
    }

    async search(
        entry: FolderEntry,
        query: SearchQuery
    ): Promise<SearchResult<FileEntry>[]> {
        return [];
    }

    private async withProvider(
        resource: URI
    ): Promise<FileSystemProvider> {
        if (!Paths.isAbsolutePath(requireNonNull(resource).path)) {
            throw new Error(`The path of resource '${resource.toString()}' must be absolute`);
        }
        const provider = this.providers.get(resource.scheme);
        if (!provider) {
            throw new Error(`"No file system provider found for ${resource.toString()}`);
        }

        return provider;
    }

    private async uploadFile(
        file: File,
        destination: IEntry
    ): Promise<FileEntry | undefined> {
        const provider = await this.withProvider(destination.uri);
        if (!destination.isFolder) {
            destination = this.find(destination.parent) as IEntry;
        }
        await provider.uploadFile(file, destination.uri);
        return undefined;
    }

    private async doMove(
        source: IEntry,
        destination: IEntry,
        copy?: boolean
    ): Promise<void> {
        requireNonNull(source, 'source');
        requireNonNull(destination, 'destination');
        requireTrue(!source.isRoot, 'cannot move a root resource');

        const sourceProvider = this.withProvider(source.uri);
        const targetProvider = this.withProvider(destination.uri);
    }

    private async doDelete(
        entry: IEntry
    ) {
        const provider = await this.withProvider(entry.uri);
        await provider.delete(entry.uri);
        this.doRemove(entry);
    }

    private async createEntry(
        parent: FolderEntry,
        type: 'folder' | 'file',
        name: string
    ): Promise<void> {
        requireTrue(
            parent.write,
            'permission denied: write access not granted for ' + parent.path
        );
        const uri = parent.uri.with({
            path: Paths.normalize(Paths.join([parent.path, name])),
        });

        const provider = await this.withProvider(uri);

        let entry: IEntry;
        if (type === 'folder') {
            await provider.createDirectory(uri);
            entry = FolderEntry.withParent(parent, name);
        } else {
            await provider.writeFile(uri, '', false);
            entry = FileEntry.withParent(parent, name);
        }

        this.doCreate(entry, parent);
        this.notifyChanges();
    }

    private doRemove(entry: IEntry) {
        const trash: IEntry[] = [];
        this.entries.forEach((v, k) => {
            if (k.startsWith(entry.path)) {
                trash.push(v);
            }
        });
        for (const item of trash) {
            this._onWillChangeFile.next([
                {
                    uri: item.uri,
                    type: FileChangeType.Deleted,
                },
            ]);
            let children = this.children.get(item.parent);
            if (children) {
                children = children.filter((child) => {
                    return child.path !== item.path;
                });
                this.children.set(item.parent, children);
            }
            this.entries.delete(item.path);
            this.children.delete(item.path);
            this.contents.delete(item.path);
            this._onDidChangeFile.next([
                {
                    uri: item.uri,
                    type: FileChangeType.Deleted,
                },
            ]);
        }
    }

    private doCreate(entry: IEntry, parent: IEntry) {
        if (parent) {
            let children = this.children.get(parent.path) || [];
            children.push(entry);
            children = children.sort((a, b) => {
                // if same type
                if (
                    (a.isFolder && b.isFolder) ||
                    (!a.isFolder && !b.isFolder)
                ) {
                    return a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1;
                }
                return a.isFolder ? -1 : 1;
            });
            this.children.set(parent.path, children);
        }
        this._onWillChangeFile.next([
            {
                uri: entry.uri,
                type: FileChangeType.Created,
            },
        ]);
        this.entries.set(entry.path, entry);
        this._onDidChangeFile.next([
            {
                uri: entry.uri,
                type: FileChangeType.Created,
            },
        ]);
    }

    private notifyChanges() {
        const roots: IEntry[] = [];
        this.entries.forEach((v) => {
            if (v.parent == null) {
                roots.push(v);
            }
        });
        this._roots.next(roots);
    }
}
