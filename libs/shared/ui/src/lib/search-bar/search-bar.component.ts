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
    SearchBar,
    SearchBarAutoCompletionGroup
} from './search-bar';

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

    @Input() searchBar?: SearchBar<any>;
    @ContentChild(TemplateRef) completionTemplate?: TemplateRef<any>;

    control = new FormControl();
    completing = false;
    completions: SearchBarAutoCompletionGroup<string>[] = [];

    constructor(
        private readonly cdr: ChangeDetectorRef,
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

        if (this.searchBar?.trigger) {
            this.subscriptions.push(
                this.searchBar.trigger.subscribe(query => {
                    if (query !== this.control.value) {
                        this.control.patchValue(query || '');
                    }
                    this.trigger();
                })
            );
        }

        setTimeout(() => {
            if (this.searchBar?.onReady) {
                this.searchBar.onReady();
            }
        }); // avoid ExpressionChangedAfterItHasBeenCheckedError
    }

    ngOnDestroy() {
        this.subscriptions.forEach((s) => s.unsubscribe());
    }

    trigger() {
        if (this.searchBar?.onTrigger) {
            this.searchBar.onTrigger(this.control.value);
        }
    }

    private async filter(query?: string) {
        this.completing = true;
        this.completions = [];
        this.cdr.detectChanges();

        if (query) {
            if (this.searchBar?.filterer) {
                const response = await this.searchBar?.filterer.filter(query || '');
                this.completions = response.completions;
                if (this.searchBar?.onSuggest) {
                    this.searchBar.onSuggest(response);
                }
            }
        } else if (this.searchBar?.onEmpty){
            this.searchBar.onEmpty();
        }

        this.completing = false;
        this.cdr.detectChanges();
    }

}
