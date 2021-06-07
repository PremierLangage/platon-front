import { AfterContentInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChildren, EventEmitter, Output, QueryList, TemplateRef } from '@angular/core';
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

    @Output() didChangeStep = new EventEmitter<number>();

    get isFirst(): boolean {
        return this.step === 0;
    }

    get isLast(): boolean {
        return this.step === this._items.length - 1;
    }

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
            this.changeStep();
        } else {
            this.didChangeStep.emit(this.step + 1);
        }
    }

    prevStep(): void {
        if (this.step > 0) {
            this.step--;
        }
        this.changeStep();
    }


    trackBy(_: number, item: StepDirective) {
        return item.stepTitle;
    }

    private changeStep(): void {
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
