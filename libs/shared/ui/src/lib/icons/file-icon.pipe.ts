import { Pipe, PipeTransform } from '@angular/core';
import { FileIcon, FileIconOptions } from './icons';

@Pipe({name: 'fileIcon'})
export class FileIconPipe implements PipeTransform {

    transform(fileName: string, options?: FileIconOptions): FileIcon {
        options = options || {
            isFolder: false,
            isRoot: false,
            alt: fileName,
        };
        return FileIcon.fromFileName(fileName, options);
    }

}
