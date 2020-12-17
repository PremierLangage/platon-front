import { Component, Injector, Input, OnInit } from '@angular/core';
import { CodIcon, ICON_TOKEN } from '../icons';

@Component({
    selector: 'ui-codicon',
    templateUrl: './codicon.component.html',
    styleUrls: ['./codicon.component.scss'],
})
export class CodIconComponent implements OnInit {
    @Input() icon!: CodIcon;

    constructor(private readonly injector: Injector) {}

    ngOnInit() {
        this.icon = this.icon || this.injector.get<CodIcon>(ICON_TOKEN);
    }
}
