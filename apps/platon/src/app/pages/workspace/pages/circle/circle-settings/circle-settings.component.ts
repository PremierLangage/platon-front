import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthUser } from '@platon/core/auth';
import { Circle } from '@platon/feature/workspace';

@Component({
  selector: 'app-circle-settings',
  templateUrl: './circle-settings.component.html',
  styleUrls: ['./circle-settings.component.scss']
})
export class CircleSettingsComponent implements OnInit {

    form = new FormGroup({
        name: new FormControl(''),
        description: new FormControl('')
    });

    @Input() user!: AuthUser;
    @Input() circle!: Circle;

    constructor() { }

    ngOnInit() {
        this.form.patchValue({
            name: this.circle.name,
            description: this.circle.description
        });
    }

}
