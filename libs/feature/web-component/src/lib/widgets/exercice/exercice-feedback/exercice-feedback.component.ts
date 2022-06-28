import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { ExerciceFeedBack } from '../exercice';

@Component({
    selector: 'app-exercice-feedback',
    templateUrl: './exercice-feedback.component.html',
    styleUrls: ['./exercice-feedback.component.scss'],
    animations: [
        trigger('fadeSlideInOutUpward', [
            transition(':enter', [
                style({ opacity: 0, transform: 'translateY(10px)' }),
                animate('500ms', style({ opacity: 1, transform: 'translateY(0)' })),
            ]),
            transition(':leave', [
                animate('500ms', style({ opacity: 0, transform: 'translateY(10px)' })),
            ]),
        ]),
        trigger('fadeSlideInOutLeftToRight', [
            transition(':enter', [
                style({ opacity: 0, transform: 'translateX(10px)' }),
                animate('500ms', style({ opacity: 1, transform: 'translateX(0)' })),
            ]),
            transition(':leave', [
            ]),
        ]),
    ]
})
export class ExerciceFeedbackComponent implements OnInit {

    constructor() { }


    @Input() feedback__?: ExerciceFeedBack;
    @Input() displayScore?: boolean = false;

    showScore: boolean = true;


    ngOnInit() {
    }

    switchScoreDisplaying() {
        this.showScore = !this.showScore;
    }



    getScoreColor() {
        if (this.feedback__) {
            if (this.feedback__) {
                let redVal = 200 - (this.feedback__.score*2);
                let greenVal = (this.feedback__.score*2);
                return `rgba(${redVal}, ${greenVal}, ${(this.feedback__.score >= 50) ? redVal : greenVal}, 1)`;
                // return `linear-gradient(rgba(${redVal}, ${greenVal}, 0, 0.350), rgba(85,0,255, 0.350))`;
            }
        }
        return "white";
    }
}
