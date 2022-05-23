import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    OnDestroy,
    OnInit,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Publisher } from 'libs/feature/workspace/src/lib/models/publisher';
import { Subscription } from 'rxjs';
import { ResourcePresenter } from '../resource-presenter';

@Component({
    selector: 'app-circle-publisher',
    templateUrl: './publisher.component.html',
    styleUrls: ['./publisher.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PublisherComponent implements OnInit, OnDestroy {
    private readonly subscriptions: Subscription[] = [];

    context = this.presenter.defaultContext;
    publisher?: Publisher;
    loading = true;
    publishing = false;

    form = new FormGroup({
        name: new FormControl('', [Validators.required]),
    });

    get canSubmit(): boolean {
        return this.form.valid; //&& !!this.context.user?.isAdmin;
    }

    constructor(
        private readonly presenter: ResourcePresenter,
        private readonly changeDetectorRef: ChangeDetectorRef
    ) {}

    ngOnInit(): void {
        this.subscriptions.push(
            this.presenter.contextChange.subscribe(async (context) => {
                this.context = context;
                this.publisher = await this.presenter.publisher().toPromise();
                this.loading = false;
                this.changeDetectorRef.markForCheck();
            })
        );
    }

    ngOnDestroy(): void {
        this.subscriptions.forEach((s) => s.unsubscribe());
    }

    async loadPublisher() {
        try {
            this.loading = true;
            this.publisher = await this.presenter.publisher().toPromise();
            this.changeDetectorRef.markForCheck();
        } finally {
            this.loading = false;
        }
    }

    async publishRequest() {
        try {
            this.publishing = true;
            if (await this.presenter.publish(this.form.value)) {
                this.loadPublisher();
            }
        } finally {
            this.publishing = false;
            this.changeDetectorRef.markForCheck();
        }
    }
}
