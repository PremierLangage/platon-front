import { Resource } from "./resource";


export interface ResourceFile {
    path: string;
    parent: string;
    hexsha: string;
    size: number;
    url: string;
    downloadUrl: string;
    mime: string;
    type: 'file' | 'folder';
    children: ResourceFile[];
}

export interface ResourceTree {
    path: string;
    hexsha: string;
    version: string;
    directory: string;
    url: string;
    downloadUrl: string;
    files: ResourceFile[];
}

export interface CreateFileForm {
    resource: Resource;
    files: Record<string, { type: 'file' | 'folder', content?: string }>;
}

export interface UpdateFileForm {
    file: ResourceFile;
    content: string;
}

export interface MoveFileForm {
    resource: Resource;
    oldpath: string;
    newpath: string;
    copy?: boolean;
}

export interface RenameFileForm {
    resource: Resource;
    oldpath: string;
    newpath: string;
}

export interface DeleteFileForm {
    resource: Resource;
    path: string;
}
