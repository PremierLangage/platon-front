import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateExerciseFormComponent } from './create-exercise-form/create-exercise-form.component';

@Component({
  selector: 'app-ws-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.scss']
})
export class ExerciseComponent implements OnInit {
    constructor(
        private readonly dialog: MatDialog
    ) { }

    ngOnInit() {
    }

    create() {
        this.dialog.open(CreateExerciseFormComponent, {
            panelClass: 'create-exercice-dialog-container',
        })
    }
}
