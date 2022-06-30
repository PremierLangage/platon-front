import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Injector, Component, Input, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { LiveService } from '@platon/feature/workspace';
import { catchError, throwError } from 'rxjs';
import { IWebComponent, WebComponent, WebComponentHooks } from '../../web-component';
import { ExampleFeedBack, ExerciceComponentDefinition, ExerciceFeedBack, ExerciceState } from './exercice';

@Component({
    selector: 'wc-exercice',
    templateUrl: 'exercice.component.html',
    styleUrls: ['exercice.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
@WebComponent(ExerciceComponentDefinition)
export class ExerciceComponent implements WebComponentHooks<ExerciceState>, AfterViewInit {
    /**
     * The state of the component.
     * The @WebComponent decorator create a getter and a setter during runtime to
     * synchronize the changes and call the methods `onAfterSerialize` (after the getter runs)
     * and `onAfterDeserialize` (after the setter runs).
     */
    @Input() state!: ExerciceState;

    @ViewChild('formLoader') formLoader?: ElementRef<HTMLElement>;

    public formComponent?: WebComponentHooks<IWebComponent>;

    title?: string;
    text?: string;

    loading : boolean = false;
    showAnswer : boolean = false;

    feedback__?: ExerciceFeedBack = undefined;
    showFeedBackScore : boolean = true;

    constructor(
        readonly injector: Injector,
        readonly liveService : LiveService
    ) {}

    ngAfterViewInit(): void {
        //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
        //Add 'implements AfterViewInit' to the class.

        this.formComponent = document.createElement(
            this.state.process.formState.selector
        ) as any;

        if (this.formComponent) {
            this.formComponent.state = this.state.process.formState;
            this.formLoader?.nativeElement.appendChild(this.formComponent as any);
        }

    }
    /**
     * This method is called immediately after the `state` getter runs with the object that
     * will be returned by the getter.
     * Define this method to handle any additional post validation tasks.
     *
     * @param state The state that will be returned by the getter.
     * @returns the state or a computed version of the state.
     */
    onGetState?(state : ExerciceState) : ExerciceState {
        return state;
    }


    /**
     * A callback method that is invoked immediately after the `state` setter runs.
     * Define this method to handle any additional validation and initialization tasks.
     *
     * Remarks:
     * - `ngOnInit` hook is always called before this one.
     * - change detector is triggered right after the end of this method refresh the view.
     */
    onChangeState() {
        this.title = (this.state.process as any).title;
        this.text = (this.state.process as any).text;
    }


    async submitForm() {
        if (this.formComponent) {
            this.showAnswer = true;
            this.loading = true;
            this.loading = false;
            this.feedback__ = ExampleFeedBack;
        }
    }

    switchScoreVisibilityStatus() {
        this.showFeedBackScore = !this.showFeedBackScore;
    }
}
