import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ActivityService, ActivityDetail} from './activity.service';

@Component({
    selector: 'app-activity',
    templateUrl: './activity.component.html',
    styleUrls: ['./activity.component.scss'],
    providers: [{provide: ActivityService}]
})

export class ActivityComponent implements OnInit {

    activity!: ActivityDetail;
    id_activity: any;

    constructor(public activityService: ActivityService,
                private route: ActivatedRoute) {

    }

    async ngOnInit() {
        this.id_activity = this.route.snapshot.paramMap.get('id');
        this.activityService.getActivity(this.id_activity)
            .then(response => {
                if(response){
                    this.activity = response;
                } else{
                    console.log("Can't load activity : " + this.id_activity)
                }
            })
    }
}
