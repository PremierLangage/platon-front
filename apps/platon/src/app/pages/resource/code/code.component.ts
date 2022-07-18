import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, Router, UrlSegment } from "@angular/router";
import { FileEntry, FileTree } from "@platon/feature/workspace";
import { Subscription } from "rxjs";
import { ResourcePresenter } from "../resource-presenter";


@Component({
    selector: 'app-resource-code',
    templateUrl: './code.component.html',
    styleUrls: ['./code.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CodeComponent implements OnInit, OnDestroy {
    private readonly subscriptions: Subscription[] = [];

    context = this.presenter.defaultContext;
    version?: string = 'master';

    node!: Node;
    urls!: UrlSegment[];

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
                const createNode = (entry: FileEntry): any => {
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
            }),
            this.activatedRoute.url.subscribe(urls => {
                this.urls = urls;
                this.changeDetectorRef.markForCheck();
            })
        );
    }

    ngOnDestroy(): void {
        this.subscriptions.forEach(s => s.unsubscribe());
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
