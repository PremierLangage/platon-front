import { HttpClient } from "@angular/common/http";
import { FileSystemProvider, FileSystemProviderCapabilities, IFile, Paths, SearchResult } from "@cisstech/nge-ide/core";
import { FileEntry, FileService, FileTree } from "@platon/feature/workspace";

class RemoteFile implements IFile {

    readonly uri: monaco.Uri;
    readonly version: number;
    readonly readOnly: boolean;
    readonly isFolder: boolean;
    readonly downloadUrl: string;

    constructor(
        entry: FileEntry,
    ) {
        const path = Paths.normalize(entry.path);
        this.uri = monaco.Uri.parse(`file:///${path}`);
        this.version = 0;
        this.readOnly = false; // TODO
        this.isFolder = !(entry.type === 'file');
        this.downloadUrl = entry.downloadUrl
    }
}

export class RemoteFileSystem extends FileSystemProvider {
    readonly scheme = 'file';

    readonly capabilities = FileSystemProviderCapabilities.FileRead |
        FileSystemProviderCapabilities.FileWrite |
        FileSystemProviderCapabilities.FileMove |
        FileSystemProviderCapabilities.FileDelete |
        FileSystemProviderCapabilities.FileSearch |
        FileSystemProviderCapabilities.FileUpload;

    constructor(
        private readonly http: HttpClient,
        private readonly tree: FileTree
    ) {
        super();
    }

    override async readDirectory(uri: monaco.Uri): Promise<IFile[]> {
        const response = await this.http.get<FileTree>(`api/v1/files/${this.tree.directory}` + uri.path).toPromise();
        const files: IFile[] = [];
        const transform = (entry: FileEntry) => {
            files.push(new RemoteFile(entry));
            entry.children?.forEach(transform);
        };
        if (response) {
            files.push({
                uri: uri,
                isFolder: true,
                readOnly: false
            })
            response.files.forEach((entry: FileEntry) => {
                transform(entry)
            })
        }
        return files;
    }

    override async read(uri: monaco.Uri): Promise<string> {
        const response = await this.http.get<string>(`api/v1/files/${this.tree.directory}` + uri.path).toPromise() as Required<string>;
        return response;
    }


    override async write(uri: monaco.Uri, content: string, update?: boolean) {
        if (update) {
            await this.http.put(`api/v1/files/${this.tree.directory}` + uri.path, {
                content: content
            }).toPromise()
        } else {
            const relpath = uri.path.replace(/^\/|\/$/g, '');
            await this.http.post(`api/v1/files/${this.tree.directory}/`, {
                files: {
                    // remove leading slash
                    [relpath]: { type: 'file', content: content }
                }
            }).toPromise()
        }
    }


    override async createDirectory(uri: monaco.Uri) {
        const relpath = uri.path.replace(/^\/|\/$/g, '');
        await this.http.post(`api/v1/files/${this.tree.directory}/`, {
            files: {
                // remove leading slash
                [relpath]: { type: 'folder' }
            }
        }).toPromise()
    }


    override async delete(uri: monaco.Uri) {
        await this.http.delete(`api/v1/files/${this.tree.directory}` + uri.path).toPromise();
    }


    override async rename(uri: monaco.Uri, name: string) {
        const relpath = uri.path.replace(/^\/|\/$/g, '');
        await this.http.patch(`api/v1/files/${this.tree.directory}` + uri.path, {
            action: 'rename',
            newpath: relpath
        }).toPromise();
    }


    override async move(source: monaco.Uri, destination: monaco.Uri, options?: { copy: boolean }) {
        const relpath = destination.path.replace(/^\/|\/$/g, '');
        await this.http.patch(`api/v1/files/${this.tree.directory}` + source.path, {
            action: 'move',
            newpath: relpath,
            copy: !!options?.copy
        }).toPromise();
    }

    override async upload(file: File, destination: monaco.Uri): Promise<void> {
        const relpath = destination.path.replace(/^\/|\/$/g, '');
        const formData = new FormData();
        formData.append('file', file, file.name);
        await this.http.post(`api/v1/files/${this.tree.directory}/${relpath}`, formData).toPromise();
    }

    // override async search(
    //     uri: monaco.Uri,
    //     form: SearchForm
    // ): Promise<SearchResult<monaco.Uri>[]> {

    // }

}
