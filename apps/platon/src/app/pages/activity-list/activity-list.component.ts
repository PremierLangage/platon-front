import { Component, OnInit, Input } from '@angular/core';
import { AuthService, AuthUser } from '@platon/core/auth';

import { ActivityService } from '../activity/activity.service';
import { Activity } from '../activity/activity.service'

@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  providers: [ActivityService],
  styleUrls: ['./activity-list.component.scss']
})
export class ActivityListComponent implements OnInit {
    user?: AuthUser;
    @Input() activities!: Activity[];
    @Input() courseId?: number;

    constructor(
        public activityService: ActivityService,
        private readonly authService: AuthService,
    ) { }

    async ngOnInit(): Promise<void> {
        this.user = await this.authService.ready();
    }

    addActivity(activity: Activity) : void {
        this.activities.push(activity);
    }
}
