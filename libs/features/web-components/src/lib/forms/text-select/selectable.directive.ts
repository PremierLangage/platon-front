import { Directive, ElementRef, HostListener, Input, OnDestroy, OnInit } from '@angular/core';
import { TextSelect } from './text-select';

@Directive({ selector: '[selectable]' })
export class SelectableDirective implements OnInit, OnDestroy {
    @Input('selectable') state!: TextSelect;

    constructor(
        private el: ElementRef<HTMLElement>
    ) {}

    ngOnInit() {
        this.el.nativeElement.innerHTML = this.state.text;
    }

    ngOnDestroy() {}

    @HostListener('mouseup', ['$event'])
    onMouseUp(event: MouseEvent) {
        const fn = window.getSelection || document.getSelection;
        const selection = fn();
/*
        const startNode = selection?.anchorNode?.parentElement;
        const endNode = selection?.focusNode?.parentElement;
 */
    }


    onChangeState() {}

}
