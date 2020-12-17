import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CodIcon, FileIcon } from '@platon/shared/ui';

@Component({
    selector: 'ide-root',
    templateUrl: 'ide.component.html',
    styleUrls: ['ide.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class IdeComponent implements OnInit {
    sideBarVisible = true;
    sideLeftVisible = true;
    sideRightVisible = true;

    statusBarVisible = true;

    constructor() { }

    ngOnInit() { }
}
