import { Component, Input, OnInit } from '@angular/core';

import { ActivityService } from '../activity/activity.service'
import { Activity } from '../activity/activity.service'


@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.css'],
})


export class ActivityListComponent implements OnInit {

@Input() public id !:number

public activities : Activity[] = []


  constructor(
      public activityService: ActivityService) { }

  ngOnInit() {
    this.activityService.getActivities(this.id)
    .then(response => {console.log(response)})
  }

  createActivity(){
    this.activityService.createActivity(this.id, "mon activity", "description")
    .then(response => {
        if(response){
            console.log(response)
        } else {
            console.log("error")
            console.log(response)
        }
    })
  }

}
