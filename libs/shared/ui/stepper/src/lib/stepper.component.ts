import { AfterContentInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChildren, QueryList, TemplateRef } from '@angular/core';
import { StepDirective } from './step.directive';

@Component({
    selector: 'ui-stepper',
    templateUrl: './stepper.component.html',
    styleUrls: ['./stepper.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StepperComponent implements AfterContentInit {
    _items: StepDirective[] = [];
    _status: string[] = [];
    _activeTemplate?: TemplateRef<any>;

    step = 0;

    @ContentChildren(StepDirective)
    steps!: QueryList<StepDirective>;

    constructor(
        private readonly changeDetectorRef: ChangeDetectorRef
    ) {}

    ngAfterContentInit(): void {
        this.step = 0;
        this._items = this.steps.toArray();
        this._items.forEach(() => this._status.push('wait'));
        if (this._status.length) {
            this._status[0] = 'process';
            this._activeTemplate = this._items[0].templateRef;
        }
    }

    nextStep(): void {
        if (this.step < this._items.length - 1) {
            this.step++;
        }
        this.onChangeStep();
    }

    prevStep(): void {
        if (this.step > 0) {
            this.step--;
        }
        this.onChangeStep();
    }


    trackBy(_: number, item: StepDirective) {
        return item.stepTitle;
    }

    private onChangeStep(): void {
        for (let i = 0; i < this._status.length; i++) {
            this._status[i] = 'wait';
            if (i < this.step) {
                this._status[i] = 'finish';
            }
        }
        this._status[this.step] = 'process';
        this._activeTemplate = this._items[this.step].templateRef;
        this.changeDetectorRef.markForCheck();
    }
}
