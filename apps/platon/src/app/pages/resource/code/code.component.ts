import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, Router, UrlSegment } from "@angular/router";
import { FileEntry, FileTree } from "@platon/feature/workspace";
import { firstValueFrom, Subscription } from "rxjs";
import { ResourcePresenter } from "../resource-presenter";


@Component({
    selector: 'app-resource-code',
    templateUrl: './code.component.html',
    styleUrls: ['./code.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CodeComponent implements OnInit, OnDestroy {
    private readonly subscriptions: Subscription[] = [];
    private readonly _index = new Map<string, FileEntry>();

    private readonly disposables: monaco.IDisposable[] = [];
    private model?: monaco.editor.ITextModel;

    context = this.presenter.defaultContext;
    version?: string = 'master';

    node!: Node;
    urls!: UrlSegment[];

    editor: CodeEditor = { state: 'NO_FILE' };

    constructor(
        private readonly presenter: ResourcePresenter,
        private readonly changeDetectorRef: ChangeDetectorRef,
        private readonly activatedRoute: ActivatedRoute,
        private router: Router,
    ) { }

    ngOnInit(): void {
        this.subscriptions.push(
            this.presenter.contextChange.subscribe(async context => {
                this.context = context;
                const tree = await this.presenter.fileTree().toPromise();
                this.refreshTree(tree);
            }),
            this.activatedRoute.url.subscribe(urls => {
                this.urls = urls;
                this.changeDetectorRef.markForCheck();
            })
        );
    }

    ngOnDestroy(): void {
        this.subscriptions.forEach(s => s.unsubscribe());
        this.disposables.forEach(d => d.dispose());
    }

    private refreshTree(tree?: FileTree): void {
        const createNode = (entry: FileEntry): any => {
            this._index.set(entry.path, entry);
            return {
                key: entry.path,
                title: entry.path.split('/').pop(),
                hexsha: entry.hexsha,
                size: entry.size,
                mime: entry.mime,
                isLeaf: !entry.children?.length,
                children: entry.children?.map(createNode).sort(this.compareNodes),
                root: false,
                type: entry.type
            }
        }
        if (tree) {
            this.node = {
                key: '',
                title: '',
                hexsha: tree.hexsha,
                size: -1,
                mime: '',
                isLeaf: false,
                children: tree.files.map(createNode).sort(this.compareNodes),
                root: true,
                type: 'folder'
            }
        }
        this.changeDetectorRef.markForCheck();
    }

    private compareNodes(a: Node, b: Node) {
        if ((a.isLeaf && b.isLeaf) || (!a.isLeaf && !b.isLeaf)) {
            return a.title.localeCompare(b.title);
        }
        return a.isLeaf ? 1 : -1;
    }

    didGoBack() {
        this.router.navigate(['..'], {relativeTo: this.activatedRoute });
    }

    didGoPath(path: string) {
        this.router.navigate([path], {relativeTo: this.activatedRoute});
    }

    async didEditable(editable: string | undefined) {
        if (editable) {
            this.editor = { state: 'LOADING' };
            this.editor = await this.getEditorState(editable);
        } else {
            this.editor = { state: 'NO_FILE' };
        }
        this.changeDetectorRef.markForCheck();
    }

    private async getEditorState(editable: string): Promise<CodeEditor> {
        const file = this._index.get(editable);
        if (file === undefined) {
            return { state: 'NOT_FOUND' };
        }
        const content = await this.presenter.getFileContent(file);

        return {
            state: content ? 'READ' : 'ERROR',
            content: content,
            file: file
        };

    }

    onCreateEditor(editor: monaco.editor.IEditor) {

        this.model = monaco.editor.createModel(this.editor.content || '', this.editor.file?.mime);

        (editor as monaco.editor.IStandaloneCodeEditor)
            .setModel(this.model);

    }

    async updateFileContent(file?: FileEntry) {
        if (file && this.model) {
            const succed = await this.presenter.updateFileContent(file, this.model.getValue());
            if (succed) {
                const tree = await this.presenter.fileTree().toPromise();
                this.refreshTree(tree);
                this.editor.state = 'LOADING';
            }
        }
    }

}

interface CodeEditor {
    state: 'LOADING' | 'READ' | 'EDIT' | 'NO_FILE' | 'NOT_FOUND' | 'ERROR';
    content?: string;
    file?: FileEntry
}

interface CodeTree {
    node?: Node;
    urls?: UrlSegment[];
}

interface Node {
    key: string;
    title: string;
    hexsha: string;
    size: number;
    mime: string;
    isLeaf?: boolean;
    children?: Node[];
    root?: boolean;
    type: 'file' | 'folder';
}
