import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[uiStepperStep]',
})
export class StepDirective {
    @Input()
    stepTitle?: string;
    @Input()
    stepIcon?: string;
    constructor(
        readonly templateRef: TemplateRef<any>,
    ) { }
}
