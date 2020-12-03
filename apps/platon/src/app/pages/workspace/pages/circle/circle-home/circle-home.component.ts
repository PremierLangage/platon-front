import { Component, OnInit } from '@angular/core';
import { NzFormatEmitEvent } from 'ng-zorro-antd/tree';

@Component({
    selector: 'app-circle-home',
    templateUrl: './circle-home.component.html',
    styleUrls: ['./circle-home.component.scss'],
})
export class CircleHomeComponent implements OnInit {
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
