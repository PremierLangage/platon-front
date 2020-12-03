import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
    Circle,
    ResourceService,
    ResourceTypes,
} from '@platon/feature/workspace';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.scss'],
  animations: []
})
export class CircleComponent implements OnInit, OnDestroy {
    private readonly subscriptions: Subscription[] = [];

    circle?: Circle;

    constructor(
        private readonly api: ResourceService,
        private readonly activatedRoute: ActivatedRoute
    ) {}

    ngOnInit() {
        const id = this.activatedRoute.snapshot.paramMap.get('id');
        if (!id) {
            return;
        }
        this.subscriptions.push(
            this.api
                .findById<Circle>({
                    id,
                    type: 'CIRCLE'
                })
                .subscribe((response) => {
                    this.circle = response;
                })
        );
    }

    ngOnDestroy() {
        this.subscriptions.forEach((s) => s.unsubscribe());
    }
}

