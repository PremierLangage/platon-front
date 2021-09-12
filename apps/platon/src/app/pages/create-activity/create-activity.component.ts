import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ActivityService, Activity } from '../activity/activity.service'


@Component({
    selector: 'app-create-activity',
    templateUrl: './create-activity.component.html',
    styleUrls: ['./create-activity.component.scss'],
    providers: [DatePipe],
})
export class CreateActivityComponent {
    submitted = false;
    activityCreate: Activity = new Activity();
    @Input() courseId?: number;
    @Output() activity = new EventEmitter<Activity>();

    constructor(
        public activityService: ActivityService,
        private datePipe: DatePipe,
    ) {}

    ngOnInit() {
    }

    onSubmit() {
        this.submitted = true;
        if(this.activityCreate.name && this.activityCreate.desc && this.activityCreate.opening && this.activityCreate.closing && this.courseId){
            this.activityService.createActivity(this.activityCreate.name.trim(), this.activityCreate.desc, this.convertDate(this.activityCreate.opening), this.convertDate(this.activityCreate.closing), this.courseId)
                .then(response => {
                    if(response){
                        this.activity.emit(response)
                    }
                })
                .catch(error => console.error(error));
        }
    }

    convertDate(date: string) {
        return this.datePipe.transform(date, 'dd-MM-yyyy');
    }
}
