import { URI } from 'vscode-uri';
import { Paths } from "../../utils/paths";

/**
 * Representation of an entry (folder or file).
 */
export interface IEntry {
    /**
     * The associated uri for this file | folder.
     *
     * Note that most documents use the `file`-scheme, which means they are files on disk.
     * However, not all files are saved on disk and therefore the `scheme`  must
     * be checked before trying to access the underlying file or siblings on disk.
     */
    readonly uri: URI;

    /**
     * Base name of the file (last part of the path).
     */
    readonly name: string;

    /**
     * The file system path of the associated resource. (starting with a slashes)
     */
    readonly path: string;

    /** Pointer to the parent entry path (`null` if it's a root file) */
    readonly parent: string;

    readonly read: boolean;
    readonly write: boolean;

    readonly isRoot: boolean;
    readonly isFolder: boolean;
}

abstract class Entry implements IEntry {
    readonly uri: URI;
    readonly name: string;
    readonly path: string;
    readonly parent: string;

    readonly read: boolean;
    readonly write: boolean;
    readonly isRoot: boolean;

    abstract readonly isFolder: boolean;

    constructor(args: Record<string, any>) {
        if (args.parent) {
            if (!args.parent.startsWith('/')) {
                args.parent = '/' + args.parent;
            }
        }

        this.uri = URI.parse(Paths.normalize(args.path));
        this.path = Paths.normalize(this.uri.fsPath);
        this.name = Paths.basename(this.path);
        this.parent = args.parent;
        this.read = !!args.read;
        this.write = !!args.write;
        this.isRoot = false;

        if (this.parent === this.path) {
            throw new Error(`"${this.path}" cannot be a parent of itself`);
        }
    }
}

export class FileEntry extends Entry {
    private hasChanged = false;

    readonly isFolder: boolean = false;
    readonly extension: string;

    /** true if there are unpersisted changes. */
    get changed(): boolean {
        return this.hasChanged;
    }

    private constructor(args: any) {
        super(args);
        this.extension = Paths.extname(this.name);
    }

    static from(scheme: string, data: any) {
        return new FileEntry({
            ...data,
            path: scheme + ':/' + Paths.normalize(data.path),
        });
    }

    static withParent(parent: IEntry, name: string): FileEntry {
        return FileEntry.from(parent.uri.scheme, {
            ...parent,
            name,
            parent: parent.path,
            path: Paths.join([parent.path, name]),
        });
    }

    with(props: { content: string }) {
        return new FileEntry({
            ...this,
            path: this.uri.scheme + ':/' + this.path,
            content: props.content,
        });
    }

    equals(o: any): boolean {
        if (typeof o === 'string') {
            return this.path === o;
        }

        if (!(o instanceof FileEntry)) {
            return false;
        }
        return o.path === this.path;
    }
}

export class FolderEntry extends Entry {
    readonly isRoot: boolean = false;
    readonly isFolder: boolean = true;

    private constructor(args: any) {
        super(args);
        this.isRoot = !this.parent;
    }

    static from(scheme: string, data: any): FolderEntry {
        return new FolderEntry({
            ...data,
            path: scheme + ':/' + Paths.normalize(data.path),
        });
    }

    static withParent(parent: IEntry, name: string): FolderEntry {
        return FolderEntry.from(parent.uri.scheme, {
            ...parent,
            name,
            parent: parent.path,
            path: Paths.join([parent.path, name]),
        });
    }

    equals(o: any): boolean {
        if (typeof o === 'string') {
            return this.path === o;
        }
        if (!(o instanceof FolderEntry)) {
            return false;
        }
        return o.path === this.path;
    }
}
