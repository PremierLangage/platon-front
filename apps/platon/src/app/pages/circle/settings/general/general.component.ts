import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-circle-settings-general',
    templateUrl: './general.component.html',
    styleUrls: ['./general.component.scss']
})
export class GeneralComponent implements OnInit {
    form = new FormGroup({
        name: new FormControl('', [Validators.required]),
        desc: new FormControl('', [Validators.required]),
        opened: new FormControl(false, [Validators.required]),
        topics: new FormControl([], Validators.required),
        levels: new FormControl([], [Validators.required]),
    });


    get canSubmit(): boolean {
        return this.form.valid;
    }

    constructor() { }

    ngOnInit() {
    }

    saveChanges() {}

}
