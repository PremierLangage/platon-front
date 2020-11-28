import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ContentChild,
    HostBinding,
    Input,
    OnDestroy,
    OnInit,
    TemplateRef
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import {
    SearchBarAutoCompletionGroup
} from './search-bar';
import { SearchBarService } from './search-bar.service';

@Component({
    selector: 'ui-search-bar',
    templateUrl: './search-bar.component.html',
    styleUrls: ['./search-bar.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchBarComponent implements OnInit, OnDestroy {
    private readonly subscriptions: Subscription[] = [];

    @HostBinding('class')
    readonly hostClass = 'mat-elevation-z2';

    @Input() placeholder = '';
    @Input() searchBarId = '';

    @ContentChild(TemplateRef) completionTemplate?: TemplateRef<any>;

    control = new FormControl();
    completing = false;
    completions: SearchBarAutoCompletionGroup<string>[] = [];

    constructor(
        private readonly cdr: ChangeDetectorRef,
        private readonly search: SearchBarService
    ) {}

    ngOnInit() {
        this.subscriptions.push(
            this.control.valueChanges
                .pipe(
                    debounceTime(500), // Wait for the user to stop typing (1/2 second in this case)
                    distinctUntilChanged(), // Wait until the search text changes.
                    switchMap(this.filter.bind(this)) // https://angular.io/guide/http#using-the-switchmap-operator
                )
                .subscribe()
        );

        this.subscriptions.push(
            this.search.onChangeQuery.subscribe(e => {
                if (e.searchBarId && e.searchBarId === this.searchBarId) {
                    if (e.query !== this.control.value) {
                        this.control.patchValue(e.query);
                    }
                }
            })
        );

        this.filter(this.control.value);
    }

    ngOnDestroy() {
        this.subscriptions.forEach((s) => s.unsubscribe());
        this.search.unregister(this.searchBarId);
    }

    private async filter(query?: string) {
        this.completing = true;
        this.completions = [];
        this.cdr.detectChanges();

        this.completions = await this.search.search(this.searchBarId, query);
        this.completing = false;
        this.cdr.detectChanges();
    }

}
