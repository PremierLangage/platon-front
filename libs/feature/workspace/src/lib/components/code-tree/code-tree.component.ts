import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output } from "@angular/core";
import { UrlSegment } from "@angular/router";

@Component({
    selector: 'ws-code-tree',
    templateUrl: './code-tree.component.html',
    styleUrls: ['./code-tree.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CodeTreeComponent {

    context: Context = {state: 'LOADING'};

    @Input()
    set codeTree(value: CodeTree) {
        this.context = {state: 'LOADING'};

        if (value.node && value.urls) {
            this.changeRoute(value.node, value.urls);
            if (this.context.node?.isLeaf) {
                this.didEitable.emit(this.context.node.key);
            } else {
                this.didEitable.emit(undefined);
            }
            this.changeDetectionRef.markForCheck();
        }

    }

    @Output() didGoBack = new EventEmitter<void>();

    @Output() didGoPath = new EventEmitter<string>();

    @Output() didEitable = new EventEmitter<string>();

    constructor(
        private readonly changeDetectionRef: ChangeDetectorRef,
    ) {}

    changeRoute(node: Node, urls: UrlSegment[]) {
        let route: Node = node;

        for (const url of urls) {
            if (route && !route.isLeaf && route.children) {
                let result = route.children.find((entry) => entry.title === url.path);
                if (result === undefined) {
                    this.context = {state: 'NOT_FOUND'};
                    return;
                }
                route = result;
            } else {
                this.context = {state: 'NOT_FOUND'};
                return;
            }
        }
        this.context = {
            state: 'READY',
            node: route
        };
    }

}

interface Context {
    state: 'LOADING' | 'READY' | 'NOT_FOUND';
    node?: Node;
}

interface CodeTree {
    node: Node;
    urls: UrlSegment[];
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
