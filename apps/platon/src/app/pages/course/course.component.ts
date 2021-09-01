import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CourseService, CourseDetail} from './course.service';

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
                ) {
    }

    async ngOnInit() {
        this.id_course = this.route.snapshot.paramMap.get('id');
        this.courseService.getCourse(this.id_course)
            .then(response => {
                if(response){
                    this.course = response;
                } else {
                    console.log("Can't load Course : " + this.id_course);
                }
            })
    }
}
