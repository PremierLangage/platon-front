import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { AuthUser } from '../../models/auth-user';

@Component({
    selector: 'auth-search-modal',
    templateUrl: './search-modal.component.html',
    styleUrls: ['./search-modal.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchModalComponent {
    isVisible = false;

    @Input() searchTitle = '';
    @Input() searchOkTitle = 'OK';
    @Input() searchNoTitle = 'Annuler';
    @Input() searchAdmin?: boolean;
    @Input() searchEditor?: boolean;
    @Input() searchMulti = true;
    @Input() searchExcludes: string[] = [];

    @Output() didSubmit = new EventEmitter<AuthUser[]>();

    selection: AuthUser[] = [];

    get ready() {
        const n = this.selection.length;
        return !this.searchMulti ? n === 1 : n > 0;
    }

    constructor(
        private readonly changeDetector: ChangeDetectorRef
    ) { }

    open(): void {
        this.isVisible = true;
        this.changeDetector.markForCheck();
    }

    close(): void {
        this.isVisible = false;
        this.changeDetector.markForCheck();
    }

    submit(): void {
        this.close();
        this.didSubmit.emit(this.selection);
    }
}
