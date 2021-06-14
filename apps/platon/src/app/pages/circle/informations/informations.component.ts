import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CircleService } from '@platon/feature/workspace';
import { Subscription } from 'rxjs';
import { CirclePresenter } from '../circle.presenter';

@Component({
    selector: 'app-circle-informations',
    templateUrl: './informations.component.html',
    styleUrls: ['./informations.component.scss']
})
export class InformationsComponent implements OnInit, OnDestroy {
    private readonly subscriptions: Subscription[] = [];

    topics: string[] = [];
    levels: string[] = [];

    form = new FormGroup({
        name: new FormControl('', [Validators.required]),
        desc: new FormControl('', [Validators.required]),
        topics: new FormControl([], Validators.required),
        levels: new FormControl([], [Validators.required]),
    });

    state = this.presenter.loadingState;

    saving = false;

    get canEdit(): boolean {
        return !!this.state.isAdmin;
    }

    get canSubmit(): boolean {
        return this.form.valid && !!this.state.isAdmin;
    }

    constructor(
        private readonly presenter: CirclePresenter,
        private readonly circleService: CircleService,
        private readonly changeDetectorRef: ChangeDetectorRef,
    ) { }

    ngOnInit() {
        this.subscriptions.push(
            this.presenter.stateChange.subscribe(async state => {
                const [topics, levels] = await Promise.all([
                    this.circleService.topics().toPromise(),
                    this.circleService.levels().toPromise(),
                ]);

                this.levels = levels;
                this.topics = topics.map(e => e.name);

                this.state = state;

                const circle = this.state.circle!;
                this.form = new FormGroup({
                    name: new FormControl({ value: circle.name, disabled: !this.canEdit }, [Validators.required]),
                    desc: new FormControl({ value: circle.desc, disabled: !this.canEdit }, [Validators.required]),
                    topics: new FormControl(circle.topics, Validators.required),
                    levels: new FormControl(circle.levels, [Validators.required]),
                });

                this.changeDetectorRef.markForCheck();
            })
        );
    }

    ngOnDestroy(): void {
        this.subscriptions.forEach(s => s.unsubscribe());
    }

    async saveChanges() {
        try {
            this.saving = true;
            await this.presenter.updateCircle(this.form.value);
        } finally {
            this.saving = false;
            this.changeDetectorRef.markForCheck();
        }
    }
}
