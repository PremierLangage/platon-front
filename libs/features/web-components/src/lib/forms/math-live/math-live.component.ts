import { ChangeDetectionStrategy, Injector, Component, Input, ViewChild, ElementRef, OnInit, OnDestroy } from '@angular/core';
import { AssetLoaderService } from '@platon/shared/utils';
import { WebComponent, WebComponentHooks } from '../../web-components';
import { MathLive, MathLiveComponentDefinition } from './math-live';
import { MathfieldElement } from 'mathlive';

@Component({
    selector: 'wc-math-live',
    templateUrl: 'math-live.component.html',
    styleUrls: ['math-live.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
@WebComponent(MathLiveComponentDefinition)
export class MathLiveComponent implements OnInit, OnDestroy, WebComponentHooks<MathLive> {
    private readonly listeners: (() => void)[] = [];

    @Input() state!: MathLive;

    @ViewChild('mathfield', { static: true, })
    mathfield!: ElementRef<MathfieldElement>;

    constructor(
        readonly injector: Injector
    ) {}

    async ngOnInit() {
        const assets = this.injector.get(AssetLoaderService);
        await assets.loadAllAsync([
            ['script', 'assets/vendors/mathlive/mathlive.min.js'],
        ]).toPromise();
        const math = this.mathfield.nativeElement;
        math.oninput = () => {
           this.state.value = math.getValue('latex')
        }
    }

    onSetState() {
        const field = this.mathfield.nativeElement;
        field.disabled = this.state.disabled;
        field.setOptions({
            smartFence: false,
            smartSuperscript: true,
            virtualKeyboards: 'all',
            virtualKeyboardTheme: 'material',
            virtualKeyboardMode: 'onfocus',
            ...(this.state.config || {})
        });
        field.setValue(this.state.value, {
            format: 'latex',
        });
    }

    ngOnDestroy(): void {
        this.listeners.forEach(l => l());
    }

}
