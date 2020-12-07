import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SearchBar } from '@platon/shared/ui';
import Fuse from 'fuse.js';
import { map } from 'rxjs/operators';
import { AuthUserService } from '../../api/auth-user.service';
import {
    AuthUser,
    AuthUserSearchIndexes,
    UserRole,
} from '../../models/auth-user';

@Component({
    selector: 'auth-search-modal',
    templateUrl: './search-modal.component.html',
    styleUrls: ['./search-modal.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchModalComponent implements OnInit {
    isVisible = false;

    @Input() searchTitle = '';
    @Input() searchRole: 'ALL' | UserRole = 'ALL';
    @Input() searchOkTitle = 'OK';
    @Input() searchNoTitle = 'Annuler';
    @Input() searchMulti = true;
    @Input() searchExcludes: Partial<AuthUser>[] = [];

    @Output() didSelect = new EventEmitter<AuthUser[]>();

    readonly searchBar: SearchBar<AuthUser> = {
        placeholder: 'Essayez un nom, un email...',
        filterer: {
            run: this.search.bind(this),
        },
        complete: item => item.userName,
        onSelect: user => {
            this.selections.push(user);
            this.searchBar.value = '';
            this.changeDetector.markForCheck();
        }
    };

    selections: AuthUser[] = [];

    get ready() {
        const n = this.selections.length;
        return !this.searchMulti ? n === 1 : n > 0;
    }

    constructor(
        private readonly api: AuthUserService,
        private readonly changeDetector: ChangeDetectorRef
    ) {}

    ngOnInit() {}

    open() {
        this.isVisible = true;
        this.changeDetector.markForCheck();
    }

    handleOk() {
        this.didSelect.emit(this.selections);
        this.isVisible = false;
        this.changeDetector.markForCheck();
    }

    handleCancel() {
        this.isVisible = false;
        this.changeDetector.markForCheck();
    }

    search(query: string) {
        return this.api
            .search({
                role: this.searchRole,
                query,
            })
            .pipe(
                map((users) => {
                    users = users.filter(this.isSelectable.bind(this));
                    const fuse = new Fuse(users, {
                        includeMatches: true,
                        findAllMatches: false,
                        threshold: 0.2,
                        keys: [...AuthUserSearchIndexes],
                    });
                    return fuse.search(query).map((r) => r.item).slice(0, 4);
                })
            );
    }

    remove(item: AuthUser) {
        this.selections = this.selections.filter(e => e.id !== item.id);
        this.changeDetector.markForCheck();
    }

    private isSelectable(user: AuthUser) {
        return !this.selections.find(e => e.id === user.id) &&
               !this.searchExcludes.find(e => e.id === user.id);
    }
}
