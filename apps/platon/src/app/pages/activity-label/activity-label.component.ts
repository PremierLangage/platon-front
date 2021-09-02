import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-activity-label',
  templateUrl: './activity-label.component.html',
  styleUrls: ['./activity-label.component.scss']
})
export class ActivityLabelComponent implements OnInit {
    @Input() name!: string;
    @Input() desc!: string;

    constructor(
    ) { }

    ngOnInit() {
    };
}
