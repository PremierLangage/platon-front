import { Component, OnInit } from '@angular/core';
import { WebComponentDefinition, WebComponentTypes } from '../../web-components';
import { WebComponentsService } from '../../web-components.service';

@Component({
  selector: 'wc-docs-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent implements OnInit {

    type!: WebComponentTypes;
    definitions: WebComponentDefinition[] = [];

    constructor(
        private readonly api: WebComponentsService
    ) { }

    ngOnInit() {
        this.definitions = this.api.ofType(this.type);
    }


    linkOf(def: WebComponentDefinition) {
        return this.api.linkFromDefinition(def);
    }

}
