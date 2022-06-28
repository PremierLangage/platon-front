import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    OnDestroy,
    OnInit,
} from '@angular/core';
import { FileEntry, FileTree } from '@platon/feature/workspace';
import { lastValueFrom, Subscription } from 'rxjs';
import { ResourcePresenter } from '../resource-presenter';

@Component({
    selector: 'app-resource-code',
    templateUrl: './code.component.html',
    styleUrls: ['./code.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CodeComponent implements OnInit, OnDestroy {
    private readonly subscriptions: Subscription[] = [];
    private readonly disposables: monaco.IDisposable[] = [];
    private model?: monaco.editor.ITextModel;


    /* NEW LINKER */
    context = this.presenter.defaultContext;
    private readonly _index = new Map<string, FileEntry>();
    private readonly _tree?: FileTree;

    public node?: Node;
    public current?: Node;
    public path: string[] = ['main.pl'];


    /* OLD LINKER */
    branchPopOverVisibile: boolean = false;

    tree?: FileTree;
    render?: FileEntry[];

    codeStatus: 'LOADING' | 'READY' = 'LOADING';
    codeContent: string = "";
    codeType: string = "python";

    constructor(
        private readonly presenter: ResourcePresenter,
        private readonly changeDetectorRef: ChangeDetectorRef
    ) {}

    ngOnInit(): void {
        this.subscriptions.push(
            this.presenter.contextChange.subscribe(async (context) => {
                this.context = context;
                this.tree = await this.presenter.fileTree().toPromise();
                console.log(this.tree);

                const createNode = (entry: FileEntry): any => {
                    return {
                        key: entry.path,
                        title: entry.path.split('/').pop(),
                        isLeaf: !entry.children?.length,
                        children: entry.children?.map(createNode).sort(this.compareNodes),
                        root: false,
                        type: entry.type
                    };
                };

                if (this.tree) {
                    this.node = {
                        key: context.resource?.name,
                        title: context.resource?.name,
                        isLeaf: false,
                        children: this.tree.files.map(createNode).sort(this.compareNodes),
                        root: true,
                        type: 'folder'
                    }
                }
                this.updateCurrentNode();
                this.changeDetectorRef.markForCheck();
            })
        );
    }

    private compareNodes(a: Node, b: Node) {
        if ((a.isLeaf && b.isLeaf) || (!a.isLeaf && !b.isLeaf)) {
            if (a.title && b.title){
                return a.title.localeCompare(b.title);
            }
        }
        return a.isLeaf ? 1 : -1;
    }

    ngOnDestroy(): void {
        this.subscriptions.forEach((s) => s.unsubscribe());
        this.disposables.forEach(d => d.dispose());
    }

    onCreateEditor(editor: monaco.editor.IEditor) {

        (editor as monaco.editor.IStandaloneCodeEditor)
            .setModel(monaco.editor.createModel(this.codeContent, this.codeType));

    }

    async refreshFiles() {
        this.tree = await this.presenter.fileTree().toPromise();
        this.changeDetectorRef.markForCheck();
    }

    async addNodeToPath(path: string) {
        this.path.push(path);
        this.updateCurrentNode();
        this.changeDetectorRef.markForCheck();
    }

    async popNodeToPath() {
        this.path.pop();
        this.updateCurrentNode();
        this.changeDetectorRef.markForCheck();
    }

    async updateCurrentNode() {
        let route = this.node;
        for (let item of this.path) {
            let result = route?.children?.find((file) => file.title === item );
            console.log(result);
            if (result === undefined) {
                this.context.state = 'NOT_FOUND';
                this.changeDetectorRef.markForCheck();
                break;
            }
            route = result;
        }
        this.current = route;
    }

    popOverClose() {
        this.branchPopOverVisibile = false;
    }

    updateTreeRoot(tree: FileTree) {
        let root = {
            children: tree.files,
        };
        for (const p of this.path) {
            let result = root.children.find((file) => file.path === p);
            if (result === undefined) {
                break;
            }
            root = {
                children: [result],
            };
        }
        this.render = root.children;
        this.loadFileContent();
    }

    popTreeRoot() {
        this.codeStatus = 'LOADING';
        this.path.pop();
        this.updateTreeRoot(this.tree!);
        this.changeDetectorRef.markForCheck();
    }

    addTreeRoot(path: string) {
        this.codeStatus = 'LOADING';
        this.path.push(path);
        this.updateTreeRoot(this.tree!);
        this.changeDetectorRef.markForCheck();
    }

    async loadFileContent() {
        if (this.render?.length === 1) {
            const file: FileEntry = this.render[0];
            const content = await this.presenter.fileContent(file);

            //this.model = this.model || monaco.editor.createModel(content, file.mime);

            this.codeContent = content;
            this.codeType = file.mime;

            // const content_split = content.split('\"');
            // const content_join = content_split.join('&quot;');
            this.codeStatus = 'READY';
            this.changeDetectorRef.markForCheck();
        }
    }
}

interface Node {
    key?: string;
    title?: string;
    isLeaf?: boolean;
    children?: Node[];
    root?: boolean;
    type: 'file' | 'folder';
}
