import {
    ChangeDetectionStrategy,
    Injector,
    Component,
    Input,
    ElementRef,
    OnInit,
    OnDestroy,
    ViewChild,
} from '@angular/core';
import { WebComponent, WebComponentHooks } from '../../web-components';
import { MathLive, MathLiveComponentDefinition } from './math-live';
import { MathfieldElement } from 'mathlive';
import { WebComponentsChangeDetectionService } from '../../web-components-change-detection.service';

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
    @ViewChild('container', { static: true })
    container!: ElementRef<HTMLElement>;

    constructor(
        readonly injector: Injector,
        readonly changeDetection: WebComponentsChangeDetectionService,
    ) {}

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
            this.changeDetection.ignore(this, () => {
                this.state.value = this.mathfield.getValue('latex');
            });
        };
        this.container.nativeElement.replaceWith(this.mathfield);
    }

    onChangeState() {
        this.mathfield.disabled = this.state.disabled;
        this.mathfield.setValue(this.state.value, {
            format: 'latex'
        });
        this.mathfield.setOptions((this.state.config || {}));
    }
}
