import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { CircleFilters } from '../../models/models';



@Component({
    selector: 'ws-circle-filters',
    templateUrl: './circle-filters.component.html',
    styleUrls: ['./circle-filters.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CircleFiltersComponent implements OnInit, OnDestroy {
    private readonly subscriptions: Subscription[] = [];
    readonly form = new FormGroup({
        type: new FormControl('all'),
        date: new FormControl(0),
        order: new FormControl('watchers'),
    });

    @Input()
    user!: string;

    @Input()
    filter: CircleFilters = {};

    @Output()
    filterChange = new EventEmitter<CircleFilters>();

    constructor(
        private readonly activatedRoute: ActivatedRoute,
    ) { }

    ngOnInit(): void {
        this.subscriptions.push(
            this.form.valueChanges.subscribe(value => {
                this.filter.opened = value.type === 'opened';
                this.filter.updatedAt = value.date;
                this.filter.orderBy = value.order;
                delete this.filter.watchers;
                if (value.type === 'watching') {
                    this.filter.watchers = [this.user];
                }

                delete this.filter.members;
                if (value.type === 'belonging') {
                    this.filter.members = [this.user];
                }

                this.filterChange.emit(this.filter);
            })
        );
        this.subscriptions.push(
            this.activatedRoute.queryParams.subscribe((e) => {
                this.filter.search = e.q ?? this.filter.search;
                this.form.patchValue({
                    type: e.type ?? 'all',
                    date: Number.parseInt(e.date, 10) || this.filter.updatedAt || 0,
                    order: e.order || this.filter.orderBy || 'watchers',
                });
            })
        );
    }

    ngOnDestroy(): void {
        this.subscriptions.forEach((s) => s.unsubscribe());
    }
}
