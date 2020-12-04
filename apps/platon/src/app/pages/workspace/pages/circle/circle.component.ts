import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService, AuthUser } from '@platon/core/auth';
import { Circle, ResourceService } from '@platon/feature/workspace';
import { Subscription } from 'rxjs';
@Component({
    selector: 'app-ws-circle',
    templateUrl: './circle.component.html',
    styleUrls: ['./circle.component.scss'],
})
export class CircleComponent implements OnInit, OnDestroy {
    private readonly subscriptions: Subscription[] = [];

    user?: AuthUser;
    circle?: Circle;
    parent?: Circle;

    constructor(
        private readonly authService: AuthService,
        private readonly activatedRoute: ActivatedRoute,
        private readonly resourceService: ResourceService
    ) {}

    async ngOnInit() {
        this.user = await this.authService.ready();
        const id = this.activatedRoute.snapshot.paramMap.get('id');
        if (!id) {
            return;
        }

        this.circle = await this.resourceService
            .findById<Circle>({ id, type: 'CIRCLE' })
            .toPromise();

        if (this.circle?.parentId) {
            this.parent = await this.resourceService
                .findById<Circle>({ id: this.circle.parentId, type: 'CIRCLE' })
                .toPromise();
        }
    }

    ngOnDestroy() {
        this.subscriptions.forEach((s) => s.unsubscribe());
    }
}
