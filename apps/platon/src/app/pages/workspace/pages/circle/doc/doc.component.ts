import {
    ChangeDetectionStrategy,
    Component,
    OnDestroy,
    OnInit
} from '@angular/core';
import { Circle } from '@platon/feature/workspace';
import { deepCopy } from '@platon/shared/utils';
import { Subscription } from 'rxjs';
import { CirclePageContext, CircleService } from '../circle.service';

@Component({
    selector: 'app-circle-doc',
    templateUrl: './doc.component.html',
    styleUrls: ['./doc.component.scss'],
})
export class DocComponent implements OnInit, OnDestroy {
    private readonly subscriptions: Subscription[] = [];
    context: CirclePageContext = {
        state: 'LOADING',
    };

    constructor(
        private readonly circleService: CircleService
    ) {}

    ngOnInit() {
        this.subscriptions.push(
            this.circleService.context.subscribe((context) => {
                this.context = context;
            })
        );
    }

    ngOnDestroy() {
        this.subscriptions.forEach((s) => s.unsubscribe());
    }

    saveChanges(documentation: string) {
        const copy = deepCopy(this.context.circle) as Circle;
        copy.documentation = documentation;
        this.circleService.update(copy);
    }

}
