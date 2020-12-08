import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    OnDestroy,
    OnInit
} from '@angular/core';
import { Resource } from '@platon/feature/workspace';
import { deepCopy } from '@platon/shared/utils';
import { Subscription } from 'rxjs';
import { DetailContext, DetailService } from '../detail.service';

@Component({
    selector: 'app-circle-doc',
    templateUrl: './doc.component.html',
    styleUrls: ['./doc.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DocComponent implements OnInit, OnDestroy {
    private readonly subscriptions: Subscription[] = [];

    context: DetailContext = {
        state: 'LOADING',
        events: [],
        members: [],
    };

    constructor(
        private readonly detailService: DetailService,
        private readonly changeDetector: ChangeDetectorRef
    ) {}

    ngOnInit() {
        this.subscriptions.push(
            this.detailService.context.subscribe((context) => {
                this.context = context;
                this.changeDetector.markForCheck();
            })
        );
    }

    ngOnDestroy() {
        this.subscriptions.forEach((s) => s.unsubscribe());
    }

    saveChanges(documentation: string) {
        const copy = deepCopy(this.context.resource) as Resource;
        copy.documentation = documentation;
        this.detailService.update(copy);
    }

}
