import { Component, OnInit } from '@angular/core';

import { ActivityService } from './activity.service';

@Component({
    selector: 'app-activity',
    templateUrl: 'activity.component.html',
    styleUrls: ['./activity.component.scss'],
    providers: [ActivityService]
})

export class ActivityComponent implements OnInit {

    constructor(
        private readonly activityService: ActivityService,
    ) { }

    ngOnInit() {
    }

    activity = [
        { "id": "Exo1" },
        { "id": "Exo2" }
    ];


}

