import { Resource } from "./resource";

export interface ResourceFile {
    path: string;
    parent: string;
    hexsha: string;
    size: number;
    url: string;
    downloadUrl: string;
    mime: string;
    type: 'file' | 'directory';
    children: ResourceFile[];
}

export interface CreateFileForm {
    resource: Resource;
    files: Record<string, { type: string, content?: string }>;
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
