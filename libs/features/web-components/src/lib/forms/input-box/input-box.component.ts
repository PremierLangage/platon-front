import { ChangeDetectionStrategy, Component, Injector, Input, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { debounceTime, map, startWith } from 'rxjs/operators';
import { WebComponent, WebComponentHooks } from '../../web-components';
import { InputBox, InputBoxComponentDefinition } from './input-box';

@Component({
    selector: 'wc-input-box',
    templateUrl: 'input-box.component.html',
    styleUrls: ['input-box.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
@WebComponent(InputBoxComponentDefinition)
export class InputBoxComponent implements OnInit, OnDestroy, WebComponentHooks<InputBox> {
    @Input() state!: InputBox;

    private subscription?: Subscription;

    readonly form = new FormControl();
    readonly $autocomplete: Observable<string[]> = this.form
        .valueChanges
        .pipe(startWith(''), map(value => this.getSuggestions(value)));

    constructor(
        readonly injector: Injector
    ) {}

    ngOnInit() {
        this.subscription = (
            this.form.valueChanges
                .pipe(debounceTime(300))
                .subscribe(value => {
                    value = value || '';
                    if (this.state.type === 'number') {
                        value = Number.parseFloat(('' + value).replace(',', '.')) || 0;
                    }

                    if (this.state.value !== value) {
                        this.state.value = value;
                    }

                    this.updateFormState();
                })
        );
    }

    ngOnDestroy() {
        this.subscription?.unsubscribe();
    }

    onChangeState() {
        this.updateFormState();
    }

    private updateFormState() {
        if (this.form.value == null || this.form.value !== this.state.value) {
            this.form.patchValue(this.state.value);
        }

        this.form.enable();
        if (this.state.disabled) {
            this.form.disable();
        }
    }

    private getSuggestions(value: string): string[] {
        if (!value) {
            return [];
        }

        const convert = (v: string) => {
            return v
            .trim()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .toLowerCase();
        };

        value = convert(value);

        return this.state.completion.filter(option => {
            return convert(option).includes(value);
        });
    }
}
