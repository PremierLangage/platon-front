import { Circle } from './circle';
import { Resource } from './resource';

export interface FileEntry {
    path: string;
    parent: string;
    hexsha: string;
    size: number;
    url: string;
    downloadUrl: string;
    mime: string;
    type: 'file' | 'folder';
    children: FileEntry[];
}

export interface FileTree {
    path: string;
    hexsha: string;
    version: string;
    directory: string;
    url: string;
    bundleUrl: string;
    downloadUrl: string;
    files: FileEntry[];
}

export interface CreateFileForm {
    owner: Resource | Circle;
    file: FormData;
    //files: Record<string, { type: 'file' | 'folder'; content?: string }>;
}

export interface UpdateFileForm {
    file: FileEntry;
    content: string;
}

export interface MoveFileForm {
    owner: Resource | Circle;
    oldpath: string;
    newpath: string;
    copy?: boolean;
}

export interface RenameFileForm {
    owner: Resource | Circle;
    oldpath: string;
    newpath: string;
}

export interface DeleteFileForm {
    owner: Resource | Circle;
    path: string;
}
