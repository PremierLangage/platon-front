import { Component, Input, OnInit } from '@angular/core';
import { Circle, ResourceStatus } from '@platon/feature/workspace';
import { NzFormatEmitEvent } from 'ng-zorro-antd/tree';

@Component({
    selector: 'app-circle-dashboard',
    templateUrl: './circle-dashboard.component.html',
    styleUrls: ['./circle-dashboard.component.scss'],
})
export class CircleDashboardComponent implements OnInit {
    @Input() circle!: Circle;

    readonly status: ResourceStatus[] = [
        'DRAFT', 'READY', 'BUGGED', 'NOT_TESTED', 'DEPRECATED'
    ];

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
