import { Component, Injector, Input, OnInit } from '@angular/core';
import { FaIcon, ICON_TOKEN } from '../icons';

@Component({
    selector: 'ui-fa-icon',
    templateUrl: './fa-icon.component.html',
    styleUrls: ['./fa-icon.component.scss'],
})
export class FaIconComponent implements OnInit {
    @Input() icon!: FaIcon;

    constructor(private readonly injector: Injector) {}

    ngOnInit() {
        this.icon = this.icon || this.injector.get<FaIcon>(ICON_TOKEN);
    }
}
