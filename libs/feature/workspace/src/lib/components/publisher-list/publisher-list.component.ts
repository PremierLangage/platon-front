import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Asset } from '../../models/asset';

@Component({
    selector: 'ws-publisher-list',
    templateUrl: './publisher-list.component.html',
    styleUrls: ['./publisher-list.component.scss'],
})
export class PublisherListComponent {
    @Input() items?: Asset[];
}
