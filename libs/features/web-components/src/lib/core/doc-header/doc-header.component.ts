import { Component, Input, OnInit } from '@angular/core';
import { WebComponentDefinition } from '../../web-components';
import { WebComponentsService } from '../../web-components.service';

@Component({
  selector: 'wc-doc-header',
  templateUrl: './doc-header.component.html',
  styleUrls: ['./doc-header.component.scss']
})
export class DocHeaderComponent implements OnInit {
    @Input() selector = '';

    definition?: WebComponentDefinition;

    constructor(
        private readonly wc: WebComponentsService
    ) {}

    ngOnInit() {
        this.definition = this.wc.findBySelector(this.selector);
    }

}
