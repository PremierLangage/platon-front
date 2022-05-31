import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    OnDestroy,
    OnInit,
} from '@angular/core';
import { FileEntry, FileTree } from '@platon/feature/workspace';
import { CodeEditorState } from 'libs/feature/web-component/src/lib/forms/code-editor/code-editor';
import { lastValueFrom, Observable, Subscription } from 'rxjs';
import { ResourcePresenter } from '../resource-presenter';

@Component({
    selector: 'app-resource-code',
    templateUrl: './code.component.html',
    styleUrls: ['./code.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CodeComponent implements OnInit, OnDestroy {
    private readonly subscriptions: Subscription[] = [];

    context = this.presenter.defaultContext;
    tree?: FileTree;
    render?: FileEntry[];
    popOverVisible: boolean = false;
    path: string[] = [];

    codeStatus: 'LOADING' | 'READY' = 'LOADING';
    codeState: string = 'Hello tout le monde';

    codeContent: string = '';

    constructor(
        private readonly presenter: ResourcePresenter,
        private readonly changeDetectorRef: ChangeDetectorRef
    ) {}

    ngOnInit(): void {
        this.subscriptions.push(
            this.presenter.contextChange.subscribe(async (context) => {
                this.context = context;
                const [tree] = await Promise.all([
                    lastValueFrom(this.presenter.fileTree()),
                ]);
                this.tree = tree;
                this.updateTreeRoot(tree);
                this.changeDetectorRef.markForCheck();
            })
        );
    }

    ngOnDestroy(): void {
        this.subscriptions.forEach((s) => s.unsubscribe());
    }

    async refreshFiles() {
        this.tree = await this.presenter.fileTree().toPromise();
        this.changeDetectorRef.markForCheck();
    }

    popOverClose() {
        this.popOverVisible = false;
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
            this.codeState = await this.presenter.fileContent(file);

            const content_split = this.codeState.split('\"');
            const content_join = content_split.join('&quot;');
            //const content = this.codeState.replace('\"*', '&quot;');
            console.log(content_join);
            this.codeContent = `<wc-code-editor code="${content_join}" language="${file.mime}"></wc-code-editor>`
            //this.codeState = `<wc-code-editor code="${content}"></wc-code-editor>`;
            //this.codeState = `<wc-code-editor state='{"code": "${content}"}'></wc-code-editor>`;
            this.codeStatus = 'READY';
            this.changeDetectorRef.markForCheck();
        }
    }
}
