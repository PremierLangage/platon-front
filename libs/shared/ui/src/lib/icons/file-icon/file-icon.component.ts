import { Component, Injector, Input, OnInit } from '@angular/core';
import { FileIcon, ICON_TOKEN } from '../icons';

@Component({
    selector: 'ui-file-icon',
    templateUrl: './file-icon.component.html',
    styleUrls: ['./file-icon.component.scss'],
})
export class FileIconComponent implements OnInit {
    @Input() icon!: FileIcon;

    constructor(private readonly injector: Injector) {}

    ngOnInit() {
        this.icon = this.icon || this.injector.get<FileIcon>(ICON_TOKEN);
    }
}
