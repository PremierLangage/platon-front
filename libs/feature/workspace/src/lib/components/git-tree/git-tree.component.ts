import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output } from "@angular/core";
import { FileEntry, FileTree } from "../../models/file";


@Component({
    selector: 'ws-git-tree',
    templateUrl: './git-tree.component.html',
    styleUrls: ['./git-tree.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GitTreeComponent {

    _loading = true;
    node?: Node;

    @Output() didRefresh = new EventEmitter<void>();

    @Output() didGoBack = new EventEmitter<void>();

    @Output() didGoPath = new EventEmitter<string>();

    @Input()
    set tree(value: Node | undefined) {
        this.node = value;
        this._loading = false;
        this.changeDetectionRef.markForCheck();
    }

    constructor(
        private readonly changeDetectionRef: ChangeDetectorRef,
    ) {}

}

interface Node {
    key?: string;
    title?: string;
    isLeaf?: boolean;
    children?: Node[];
    root?: boolean;
    type: 'file' | 'folder';
}

interface Mode {
    state: 'LOADING' | 'READY' | 'EDIT';
}
