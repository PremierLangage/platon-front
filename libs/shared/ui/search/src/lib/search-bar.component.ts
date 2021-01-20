import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ContentChild,
    HostBinding,
    Input,
    OnDestroy,
    OnInit,
    TemplateRef,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { SearchBar } from './search-bar';

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

    @Input() searchBar!: SearchBar<any>;
    @ContentChild(TemplateRef) suggestionTemplate?: TemplateRef<any>;

    control = new FormControl();

    suggesting = false;
    suggestions: any[] = [];

    constructor(private readonly changeDetector: ChangeDetectorRef) {}

    ngOnInit() {
        this.subscriptions.push(
            this.control.valueChanges
                .pipe(
                    debounceTime(500), // Wait for the user to stop typing (1/2 second in this case)
                    distinctUntilChanged(), // Wait until the search text changes.
                    switchMap((query) => {
                        this.startFiltering(query);
                        return [];
                    }) // https://angular.io/guide/http#using-the-switchmap-operator
                )
                .subscribe()
        );

        this.control.patchValue(this.searchBar.value || '');

        this.defineSetterForValueProperty();

        setTimeout(() => {
            if (this.searchBar.onReady) {
                this.searchBar.onReady();
            }
        }); // avoid ExpressionChangedAfterItHasBeenCheckedError
    }

    ngOnDestroy() {
        this.subscriptions.forEach((s) => s.unsubscribe());
    }

    onSearch() {
        if (this.searchBar?.onSearch) {
            this.searchBar.onSearch(this.control.value);
        }
    }

    onSelect(event: any, item: any) {
        if (event.isUserInput && this.searchBar.onSelect) {
            this.searchBar.onSelect(item);
        }
    }

    private stopFiltering() {
        this.subscriptions.forEach((s, i) => {
            if (i > 0) {
                s.unsubscribe();
            }
        });
        this.subscriptions.splice(1, this.subscriptions.length);
    }

    private startFiltering(query?: string) {
        this.suggesting = true;
        this.suggestions = [];
        this.changeDetector.markForCheck();

        this.stopFiltering();

        this.subscriptions.push(
            this.searchBar?.filterer.run(query || '').subscribe({
                next: (response) => {
                    this.suggestions = response;
                    this.suggesting = false;
                    this.changeDetector.markForCheck();
                    this.stopFiltering();
                },
                error: (error) => {
                    console.error(error);
                    this.stopFiltering();
                },
            })
        );
    }

    private defineSetterForValueProperty() {
        if (!Object.getOwnPropertyDescriptor(this.searchBar, 'value')?.set) {
            Object.defineProperty(this.searchBar, 'value', {
                get: () => {
                    return this.control.value;
                },
                set: (value: string) => {
                    this.control.patchValue(value || '');
                    this.onSearch();
                },
            });
        }
    }
}
