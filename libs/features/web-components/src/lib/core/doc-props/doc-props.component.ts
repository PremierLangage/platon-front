import { Component, Input, OnInit } from '@angular/core';
import { WebComponentDefinition } from '../../web-components';
import { WebComponentsService } from '../../web-components.service';

@Component({
  selector: 'wc-doc-props',
  templateUrl: './doc-props.component.html',
  styleUrls: ['./doc-props.component.scss']
})
export class DocPropsComponent implements OnInit {
    @Input() selector = '';

    definition?: WebComponentDefinition;

    constructor(
        private readonly wc: WebComponentsService
    ) {}

    ngOnInit() {
        this.definition = this.wc.findBySelector(this.selector);
    }

}
