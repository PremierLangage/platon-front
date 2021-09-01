import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivityService, Activity } from '../activity/activity.service'


@Component({
    selector: 'app-create-activity',
    templateUrl: './create-activity.component.html',
    styleUrls: ['./create-activity.component.scss'],
})
export class CreateActivityComponent {
    submitted = false;
    name!: string;
    @Input() courseId!: number;
    @Output() activity = new EventEmitter<Activity>();

    constructor(public activityService: ActivityService) {}

    ngOnInit() {
    }

    onSubmit() {
        this.submitted = true;
        if(this.name && this.courseId){
            this.activityService.createActivity(this.name.trim(), this.courseId)
                .then(response => {
                    if(response){
                        this.activity.emit(response)
                    }
                })
                .then(response => {console.log("submit data")})
                .catch(error => console.error(error));
        }
    }
}
