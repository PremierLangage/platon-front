import { Component, OnInit } from '@angular/core';
import { CircleService } from '../circle.service';

@Component({
    selector: 'app-circle-doc',
    templateUrl: './doc.component.html',
    styleUrls: ['./doc.component.scss'],
})
export class DocComponent implements OnInit {
    constructor(private readonly circleService: CircleService) {}
    ngOnInit() {
    }
}
