import { Component, OnInit, Input } from '@angular/core';

import { ActivityService } from '../activity/activity.service';
import { Activity } from '../activity/activity.service'

@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  providers: [ActivityService],
  styleUrls: ['./activity-list.component.scss']
})
export class ActivityListComponent implements OnInit {
    @Input() activities!: Activity[];
    @Input() courseId!: number;

    constructor(public activityService: ActivityService) {
    }

    ngOnInit(): void {
    }

    addActivity(activity: Activity) : void {
        this.activities.push(activity);
    }
}
