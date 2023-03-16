import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
    selector: '[uiStepperStep]',
})
export class StepDirective {
    @Input()
    stepTitle?: string;
    @Input()
    stepIcon?: string;
    @Input()
    stepValidator?: boolean;

    constructor(
        readonly templateRef: TemplateRef<any>,
    ) { }
}
