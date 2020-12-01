import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-exercise-form',
  templateUrl: './create-exercise-form.component.html',
  styleUrls: ['./create-exercise-form.component.scss']
})
export class CreateExerciseFormComponent implements OnInit {

    templates = [
       'Texte à trous',
       'Mots à placer',
       'Mots à surligner',
       'QCM',
       'AMC',
       'Gift',
       'Dictée',
       'Automate',
       'Former des pairs',
       'Images à ordonner',
       'Liste à ordonner',
       'Code à ordonner',
    ];

    constructor(
        private readonly dialog: MatDialogRef<any>
    ) { }

    ngOnInit() {
    }


    dismiss() {
        this.dialog.close();
    }
}
