import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CourseService} from './course.service';
@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
  providers: [{provide: CourseService}]
})

export class CourseComponent implements OnInit {
    course: any;
    id_course: any;

    constructor(public courseService: CourseService,
                private route: ActivatedRoute) {
    }

    async ngOnInit() {
        this.course = this.courseService.loadActivities().subscribe(
            (data) =>
                (this.course = {
                    name: (data as any).name,
                    id: (data as any).id,
                    activities: (data as any).activities,
                })
        );
        this.id_course = this.route.snapshot.paramMap.get('id');
        console.log(this.id_course);
    }

    activityChosen(activity: any) {
        return activity.id;
    }
}
