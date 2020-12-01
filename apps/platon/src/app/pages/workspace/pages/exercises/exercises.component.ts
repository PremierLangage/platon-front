import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateExerciseFormComponent } from './create-exercise-form/create-exercise-form.component';

@Component({
  selector: 'app-workspace-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.scss']
})
export class ExercisesComponent implements OnInit {
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
