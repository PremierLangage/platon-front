import { Component, OnInit, Input } from '@angular/core';

import { feedback } from '../../../../../exercises/pl1.json';
import { author } from '../../../../../exercises/pl1.json';
import { title } from '../../../../../exercises/pl1.json';
import { text } from '../../../../../exercises/pl1.json';

@Component({
    selector: 'app-exercise',
    templateUrl: './exercise.component.html',
    styleUrls: ['./exercise.component.scss'],
})
export class ExerciseComponent implements OnInit {
    @Input() rawText: string = "";
    parsedText: string = "";
    constructor() {}

    ngOnInit() {}

    auteur = author;
    titre = title;
    texte = text;
    rendu = feedback;

}
