import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'ide-root',
    templateUrl: 'ide.component.html',
    styleUrls: ['ide.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class IdeComponent implements OnInit {

    constructor() { }

    ngOnInit() { }
}
