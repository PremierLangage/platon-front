import { Component, Injector, Input, OnInit } from '@angular/core';
import { ICON_TOKEN, ImgIcon } from '../icons';

@Component({
    selector: 'ui-img-icon',
    templateUrl: './img-icon.component.html',
    styleUrls: ['./img-icon.component.scss'],
})
export class ImgIconComponent implements OnInit {
    @Input() icon!: ImgIcon;

    constructor(private readonly injector: Injector) {}

    ngOnInit() {
        this.icon = this.icon || this.injector.get<ImgIcon>(ICON_TOKEN);
    }
}
