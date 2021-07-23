import { ChangeDetectionStrategy, ChangeDetectorRef, Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { SearchBar } from '@platon/shared/ui/search';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthUserService } from '../../api/auth-user.service';
import { AuthUser } from '../../models/auth-user';


@Component({
    selector: 'auth-search-bar',
    templateUrl: './search-bar.component.html',
    styleUrls: ['./search-bar.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => SearchBarComponent),
            multi: true
        }
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchBarComponent implements ControlValueAccessor {
    @Input() searchAdmin?: boolean;
    @Input() searchEditor?: boolean;
    @Input() searchMulti = true;
    @Input() searchExcludes: string[] = [];
    @Input() disabled = false;

    onTouch: any = () => { }
    onChange: any = () => { }

    readonly searchBar: SearchBar<AuthUser> = {
        placeholder: 'Essayez un nom, un email...',
        filterer: {
            run: this.search.bind(this),
        },
        complete: item => item.username,
        onSelect: user => {
            this.searchBar.value = '';

            if (!this.searchMulti) {
                this.selection = [];
            }

            this.selection.push(user);
            this.onChangeSelection();
        }
    };

    selection: AuthUser[] = [];

    constructor(
        private readonly authUserService: AuthUserService,
        private readonly changeDetectorRef: ChangeDetectorRef,
    ) { }

    // ControlValueAccessor methods

    writeValue(value: any): void {
        this.selection = value || [];
        this.changeDetectorRef.markForCheck();
    }

    registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: any): void {
        this.onTouch = fn;
    }

    setDisabledState(isDisabled: boolean): void {
        this.disabled = isDisabled;
    }

    search(query: string): Observable<AuthUser[]> {
        return this.authUserService
            .search({
                admin: this.searchAdmin,
                editor: this.searchEditor,
                search: query,
            })
            .pipe(
                map((page) => {
                    return page.results.filter(
                        this.isSelectable.bind(this)
                    ).slice(0, 4);
                })
            );
    }

    remove(item: AuthUser): void {
        this.selection = this.selection.filter(
            e => e.id !== item.id
        );
        this.onChangeSelection();
    }

    private isSelectable(user: AuthUser): boolean {
        return !this.selection.find(
            e => e.id === user.id
        ) && !this.searchExcludes.find(e => e === user.username);
    }


    private onChangeSelection(): void {
        if (this.searchMulti) {
            this.onTouch(this.selection);
            this.onChange(this.selection);
        } else {
            this.onTouch(this.selection[0]);
            this.onChange(this.selection[0]);
        }
        this.changeDetectorRef.markForCheck();
    }
}
