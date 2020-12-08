// tslint:disable: no-non-null-assertion
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Resource, TagsService } from '@platon/feature/workspace';
import { deepCopy } from '@platon/shared/utils';
import { Subscription } from 'rxjs';
import { DetailContext, DetailService } from '../../detail.service';

@Component({
    selector: 'app-ws-detail-settings-general',
    templateUrl: './general.component.html',
    styleUrls: ['./general.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GeneralComponent implements OnInit, OnDestroy {
    private readonly subscription: Subscription[] = [];

    context: DetailContext = {
        state: 'LOADING',
        events: [],
        members: [],
    };

    form = new FormGroup({
        name: new FormControl('', [Validators.required]),
        tags: new FormControl('', Validators.required),
        description: new FormControl('', [Validators.required]),
    });

    tags: any[] = [];

    constructor(
        private readonly tagsService: TagsService,
        private readonly detailService: DetailService,
        private readonly changeDetector: ChangeDetectorRef,
    ) {}

    async ngOnInit() {
        this.subscription.push(
            this.detailService.context.subscribe(context => {
                this.context = context;
                if (context.state === 'READY') {
                    this.form.setValue({
                        name: context.resource!.name,
                        tags: context.resource!.tags.slice(),
                        description: context.resource!.description,
                    });
                    setTimeout(() => {
                        this.changeDetector.markForCheck();
                    });
                }
            })
        );

        this.tags = await this.tagsService.cascader().toPromise();
        this.changeDetector.markForCheck();
    }

    ngOnDestroy() {
        this.subscription.forEach(s => s.unsubscribe());
    }

    saveChanges() {
        const copy = deepCopy(this.context.resource) as Resource;
        const { name, description, tags } = this.form.value;
        copy.name = name;
        copy.description = description;
        copy.tags = tags;
        this.detailService.update(copy);
    }

}
