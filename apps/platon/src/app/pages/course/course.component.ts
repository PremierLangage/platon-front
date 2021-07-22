import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CourseService, CourseDetail} from './course.service';
import { ActivityService, Activity } from '../activity/activity.service'


@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
  providers: [{provide: CourseService}]
})

export class CourseComponent implements OnInit {

    course!: CourseDetail;
    id_course: any;


    constructor(public courseService: CourseService,
                private route: ActivatedRoute,
                public activityService: ActivityService) {

    }

    async ngOnInit() {
        this.id_course = this.route.snapshot.paramMap.get('id');
        console.log('id');
        console.log(this.id_course)
        this.courseService.getCourse(this.id_course)
            .then(response => {
                if(response){
                    this.course = response;
                    console.log(this.course)
                }
                else{
                    console.log("pb")
                    console.log(response)
                }

            })

        console.log(this.id_course);
    }

    createActivity(){
        this.activityService.createActivity(this.id_course, "mon activity", "description")
        .then(response => {
            if(response){
                console.log(response)
            } else {
                console.log("error")
                console.log(response)
            }
        })
      }

    activityChosen(activity: any) {
        return activity.id;
    }
}
