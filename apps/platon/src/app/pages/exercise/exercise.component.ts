import { Component, OnInit, Input } from '@angular/core';

import { title } from '../../exercises/pl.json';
import { text } from '../../exercises/pl.json';

@Component({
    selector: 'app-exercise',
    templateUrl: './exercise.component.html',
    styleUrls: ['./exercise.component.scss'],
})
export class ExerciseComponent implements OnInit {
    public titre;
    public texte;

    constructor() {
        this.titre = title;
        this.texte = text;
    }

    form1 = `
    <wc-input-box state='{"selector": "c-input", "type": "text","placeholder": "Titre","maxlength": "2", "appearance": "outline"}'></wc-input-box>
    `
    form2 = `
    <wc-code-editor state='{"selector": "c-code-editor", "language": "python", "code": "# write your code here"}'></wc-code-editor>
    `;

    ngOnInit() {
    }


}
