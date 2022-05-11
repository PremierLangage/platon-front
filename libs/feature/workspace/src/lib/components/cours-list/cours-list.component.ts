import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cours } from '../../models/asset';

@Component({
    selector: 'ws-cours-list',
    templateUrl: './cours-list.component.html',
    styleUrls: ['./cours-list.component.scss'],
})
export class CoursListComponent {
    @Input() cours!: Cours[];
}
