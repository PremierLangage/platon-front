import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Package } from '../../models/resource';

@Component({
  selector: 'ws-package-list-item',
  templateUrl: './package-list-item.component.html',
  styleUrls: ['./package-list-item.component.scss']
})
export class PackageListItemComponent {
    @Input() item!: Package;
    @Output() didFilterByTag = new EventEmitter<string>();
}
