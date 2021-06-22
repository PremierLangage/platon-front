import { Component, OnInit } from '@angular/core';

import { ActivityService } from './activity.service';
import { name, id, exercices_id } from '../../../../exercises/activity.json';

@Component({
    selector: 'app-activity',
    templateUrl: 'activity.component.html',
    styleUrls: ['./activity.component.scss'],
    providers: [ActivityService]
})

export class ActivityComponent implements OnInit {

    public nom;
    public num;
    public exercises_list;

    constructor(
        private readonly activityService: ActivityService,
    ) {
        this.nom = name;
        this.num = id;
        this.exercises_list = exercices_id;
    }

    ngOnInit() {
    }

}

