// tslint:disable: no-non-null-assertion
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Circle } from '@platon/feature/workspace';
import { deepCopy } from '@platon/shared/utils';
import { Subscription } from 'rxjs';
import { CirclePageContext, CircleService } from '../../circle.service';

@Component({
    selector: 'app-circle-settings-general',
    templateUrl: './general.component.html',
    styleUrls: ['./general.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GeneralComponent implements OnInit, OnDestroy {
    private readonly subscription: Subscription[] = [];

    context: CirclePageContext = {
        state: 'LOADING'
    };

    form = new FormGroup({
        name: new FormControl('', [Validators.required]),
        description: new FormControl('', [Validators.required]),
    });

    constructor(
        private readonly circleService: CircleService,
        private readonly changeDetector: ChangeDetectorRef,
    ) {}

    ngOnInit() {
        this.subscription.push(
            this.circleService.context.subscribe(context => {
                this.context = context;
                if (context.state === 'READY') {
                    this.form.setValue({
                        name: context.circle!.name,
                        description: context.circle!.description,
                    });
                    setTimeout(() => {
                        this.changeDetector.markForCheck();
                    });
                }
            })
        );
    }

    ngOnDestroy() {
        this.subscription.forEach(s => s.unsubscribe());
    }

    saveChanges() {
        const copy = deepCopy(this.context.circle) as Circle;
        const { name, description } = this.form.value;
        copy.name = name;
        copy.description = description;

        this.circleService.update(copy);
    }

}
