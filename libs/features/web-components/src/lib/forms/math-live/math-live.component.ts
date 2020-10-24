import {
    ChangeDetectionStrategy,
    Injector,
    Component,
    Input,
    ElementRef,
    OnInit,
} from '@angular/core';
import { WebComponent, WebComponentHooks } from '../../web-components';
import { MathLive, MathLiveComponentDefinition } from './math-live';
import { MathfieldElement } from 'mathlive';

@Component({
    selector: 'wc-math-live',
    templateUrl: 'math-live.component.html',
    styleUrls: ['math-live.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
@WebComponent(MathLiveComponentDefinition)
export class MathLiveComponent implements OnInit, WebComponentHooks<MathLive> {
    private mathfield!: MathfieldElement;

    @Input() state!: MathLive;

    constructor(readonly injector: Injector) {}

    async ngOnInit() {
        this.mathfield = new MathfieldElement();
        this.mathfield.setOptions({
            locale: 'fr',
            smartFence: false,
            smartSuperscript: true,
            virtualKeyboards: 'all',
            virtualKeyboardMode: 'manual',
            virtualKeyboardTheme: 'material',
            fontsDirectory: 'assets/vendors/mathlive/fonts'
        });
        this.mathfield.oninput = () => {
            this.state.value = this.mathfield.getValue('latex');
        };

        this.injector
            .get(ElementRef)
            .nativeElement
            .querySelector('.math-field')
            ?.replaceWith(this.mathfield);
    }

    onChangeState() {
        this.mathfield.disabled = this.state.disabled;
        this.mathfield.setValue(this.state.value, {
            format: 'latex'
        });
        this.mathfield.setOptions((this.state.config || {}));
    }
}
