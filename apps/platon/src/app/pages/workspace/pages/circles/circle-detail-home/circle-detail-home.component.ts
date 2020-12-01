import { Component, OnInit } from '@angular/core';
import { NzFormatEmitEvent } from 'ng-zorro-antd/tree';

@Component({
    selector: 'app-circle-detail-home',
    templateUrl: './circle-detail-home.component.html',
    styleUrls: ['./circle-detail-home.component.scss'],
})
export class CircleDetailHomeComponent implements OnInit {
    tags = [
        {
            title: 'Informatique',
            key: '00',
            expanded: true,
            children: [
                {
                    title: 'Automate',
                    key: '001',
                    children: [{ title: 'L2', key: '0001' }],
                },
            ],
        },
    ];
    constructor() {}

    ngOnInit() {}

    nzEvent(event: NzFormatEmitEvent): void {
        console.log(event);
        event.event?.preventDefault();
        event.event?.stopPropagation();
    }
}
