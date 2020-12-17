// inspired from vscode api https://code.visualstudio.com/api/references/vscode-api#FileSystem

import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { URI } from 'vscode-uri';
import { IEntry } from './entries';

/**
 * Possible changes that can occur to a file.
 */
export enum FileChangeType {
    /**
     * A file content has changed.
     */
    Changed = 1,

    /**
     * A file has been created.
     */
    Created = 2,

    /**
     * A file has been deleted.
     */
    Deleted = 3,
}

/**
 * A file resource with meta information.
 */
export interface IFileStat {
    /** mime type of the file e.g image/png  */
    mime: string;
}

/**
 * Identifies a single change in a file.
 */
export interface IFileChange {
    /**
     * The type of change that occurred to the file.
     */
    readonly type: FileChangeType;

    /**
     * The unified resource identifier of the file that changed.
     */
    readonly uri: URI;
}

/**
 * The filesystem provider defines what the editor needs to read, write, discover,
 * and to manage files and folders. It allows extensions to serve files from remote places,
 * like ftp-servers, and to seamlessly integrate those into the editor.
 *
 * * *Note 1:* The filesystem provider API works with [uris](#URI) and assumes hierarchical
 * paths, e.g. `foo:/my/path` is a child of `foo:/my/` and a parent of `foo:/my/path/deeper`.
 * * *Note 2:* There is an activation event `onFileSystem:<scheme>` that fires when a file
 * or folder is being accessed.
 * * *Note 3:* The word 'file' is often used to denote all kinds of files, e.g.
 * folders, regular files.
 */
export interface FileSystemProvider {
    readonly scheme: string;
    readonly onDidChangeFile: Observable<IFileChange[]>;
    readonly onDidBeforeChangeFile: Observable<IFileChange[]>;

    /**
     * Retrieve all entries of a [directory](#FileType.Directory).
     *
     * @param uri The uri of the folder.
     * @return A map of [`FsFile`](#FsFile) or a promise that resolves to such.
     * @throws [`FileNotFound`](#FileSystemError.FileNotFound) when `uri` doesn't exist.
     */
    readDirectory(uri: URI): Promise<Map<string, IEntry>>;

    /**
     * Create a new directory (Note, that new files are created via `write`-calls).
     *
     * @param uri The uri of the new folder.
     * @throws [`FileNotFound`](#FileSystemError.FileNotFound) when the parent of `uri` doesn't exist, e.g. no mkdirp-logic required.
     * @throws [`FileExists`](#FileSystemError.FileExists) when `uri` already exists.
     * @throws [`NoPermissions`](#FileSystemError.NoPermissions) when permissions aren't sufficient.
     */
    createDirectory(uri: URI): Promise<void>;

    /**
     * Read the entire contents of a file.
     *
     * @param uri The uri of the file.
     * @return A TextDocument or a promise that resolves to such.
     * @throws [`FileNotFound`](#FileSystemError.FileNotFound) when `uri` doesn't exist.
     */
    readFile(
        uri: URI
    ): Promise<{
        content: string;
        meta: IFileStat;
    }>;

    /**
     * Write data to a file, replacing its entire contents.
     *
     * @param uri The uri of the file.
     * @param content The new content of the file.
     * @param update Updates the content of the file instead of created a new file.
     * @throws [`FileNotFound`](#FileSystemError.FileNotFound) when `uri` doesn't exist and `create` is not set.
     * @throws [`FileNotFound`](#FileSystemError.FileNotFound) when the parent of `uri` doesn't exist and `create` is set, e.g. no mkdirp-logic required.
     * @throws [`FileExists`](#FileSystemError.FileExists) when `uri` already exists, `create` is set but `overwrite` is not set.
     * @throws [`NoPermissions`](#FileSystemError.NoPermissions) when permissions aren't sufficient.
     */
    writeFile(uri: URI, content: string, update: boolean): Promise<void>;

    uploadFile(file: File, destination: URI): Promise<URI>;

    /**
     * Delete a file.
     *
     * @param uri The resource that is to be deleted.
     * @throws [`FileNotFound`](#FileSystemError.FileNotFound) when `uri` doesn't exist.
     * @throws [`NoPermissions`](#FileSystemError.NoPermissions) when permissions aren't sufficient.
     */
    delete(uri: URI): Promise<void>;

    /**
     * Rename a file or folder.
     *
     * @param uri The existing file.
     * @param name The new location.
     * @throws [`FileNotFound`](#FileSystemError.FileNotFound) when `uri` doesn't exist.
     * @throws [`FileNotFound`](#FileSystemError.FileNotFound) when parent of the new uri doesn't exist, e.g. no mkdirp-logic required.
     * @throws [`FileExists`](#FileSystemError.FileExists) when `newUri` exists and when the `overwrite` option is not `true`.
     * @throws [`NoPermissions`](#FileSystemError.NoPermissions) when permissions aren't sufficient.
     */
    rename(uri: URI, name: string): Promise<void>;

    /**
     * Copy files or folders.
     *
     * @param source The existing file.
     * @param destination The destination location.
     * @param options Defines if existing files should be copied.
     * @throws [`FileNotFound`](#FileSystemError.FileNotFound) when `source` doesn't exist.
     * @throws [`FileNotFound`](#FileSystemError.FileNotFound) when parent of `destination` doesn't exist, e.g. no mkdirp-logic required.
     * @throws [`FileExists`](#FileSystemError.FileExists) when `destination` exists and when the `overwrite` option is not `true`.
     * @throws [`NoPermissions`](#FileSystemError.NoPermissions) when permissions aren't sufficient.
     */
    move(
        source: URI,
        destination: URI,
        options: { copy: boolean }
    ): Promise<URI>;

    createZip(uri: URI): Promise<void>;

    resolveTo(uri: URI, path: string): Promise<URI>;
}

export const FILE_SYSTEM_PROVIDERS = new InjectionToken<FileSystemProvider>('FILE_SYSTEM_PROVIDERS');
