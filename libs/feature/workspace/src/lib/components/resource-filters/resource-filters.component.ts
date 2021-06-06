import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
    selector: 'ws-resource-filters',
    templateUrl: './resource-filters.component.html',
    styleUrls: ['./resource-filters.component.scss']
})
export class ResourceFiltersComponent implements OnInit {

    readonly form = new FormGroup({
        sortBy: new FormControl('watchers_count'),
        visibility: new FormControl('all'),
        date: new FormControl(0),
    });

    constructor() { }

    ngOnInit() {
    }

}
