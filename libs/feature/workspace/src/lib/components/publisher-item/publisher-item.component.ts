import { Component, Input } from '@angular/core';
import { Asset } from '../../models/asset';

@Component({
    selector: 'ws-publisher-item',
    templateUrl: './publisher-item.component.html',
    styleUrls: ['./publisher-item.component.scss'],
})
export class PublisherItemComponent {
    @Input() item!: Asset;

    icon: string = 'appstore';
}
