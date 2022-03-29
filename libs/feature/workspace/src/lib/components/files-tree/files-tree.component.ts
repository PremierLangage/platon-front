import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { ClipboardService } from '@mcisse/nge/services';
import { FileEntry, FileTree } from '@platon/feature/workspace';
import { NzContextMenuService, NzDropdownMenuComponent } from 'ng-zorro-antd/dropdown';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzTreeNode } from 'ng-zorro-antd/tree';


@Component({
    selector: 'ws-files-tree',
    templateUrl: './files-tree.component.html',
    styleUrls: ['./files-tree.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilesTreeComponent {
    private readonly _index = new Map<string, FileEntry>();
    private _tree?: FileTree;
    private _selection?: FileEntry;
    _loading = true;
    isDisplay = false;

    @Output() didRefresh = new EventEmitter<void>();
    @Output() deleteFile = new EventEmitter<FileEntry>();

    nodes: Node[] = [];

    @Input()
    set tree(value: FileTree | undefined) {
        this._index.clear();
        this._tree = value;
        const createNode = (entry: FileEntry): any => {
            this._index.set(entry.path, entry);
            return {
                key: entry.path,
                title: entry.path.split('/').pop(),
                isLeaf: (entry.type == 'file'),
                children: entry.children?.map(createNode).sort(this.compareNodes)
            };
        };

        if (value) {
            this.nodes = value.files.map(createNode).sort(this.compareNodes)
        } else {
            this.nodes = [];
        }

        this._loading = false;
        this.changeDetectionRef.markForCheck();
    }

    constructor(
        private readonly nzMessageService: NzMessageService,
        private readonly clipboardService: ClipboardService,
        private readonly changeDetectionRef: ChangeDetectorRef,
        private readonly nzContextMenuService: NzContextMenuService,
    ) { }

    contextMenu(
        event: MouseEvent,
        menu: NzDropdownMenuComponent,
        node: NzTreeNode
    ): void {
        this._selection = this._index.get(node.key);
        this.nzContextMenuService.create(event, menu);
    }

    copyPath(): void {
        if (this._selection && this._tree) {
            this.clipboardService.copy(
                `${this._tree.directory}/${this._selection.path}`
            );
            this.nzMessageService.success('Le chemin a été copié dans le presse-papiers');
        }
    }

    download(): void {
        if (this._selection) {
            window.open(this._selection.downloadUrl, '_blank');
        }
    }

    delete(node: NzTreeNode): void {
        this._selection = this._index.get(node.key);

        if (this._selection) {
            this.deleteFile.emit(this._selection);
        }
    }

    refresh() {
        this._loading = true;
        this.didRefresh.emit();
    }

    private compareNodes(a: Node, b: Node) {
        if ((a.isLeaf && b.isLeaf) || (!a.isLeaf && !b.isLeaf)) {
            return a.title.localeCompare(b.title);
        }
        return a.isLeaf ? 1 : -1;
    }
}


interface Node {
    key: string;
    title: string;
    isLeaf?: boolean;
    children?: Node[];
}
