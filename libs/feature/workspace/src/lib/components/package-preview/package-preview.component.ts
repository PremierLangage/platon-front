import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Package } from '../../models/package';

@Component({
  selector: 'package-preview',
  templateUrl: './package-preview.component.html',
  styleUrls: ['./package-preview.component.scss']
})
export class PackagePreviewComponent {
    @Input() package!: Package;
    @Output() didFilterByTag = new EventEmitter<string>();
}
