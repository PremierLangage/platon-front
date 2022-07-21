import { Injectable } from "@angular/core";
import { ActivatedRoute, UrlSegment } from "@angular/router";
import { AuthService, AuthUser } from "@platon/core/auth";
import { FileEntry, FileTree, ResourceService } from "@platon/feature/workspace";
import { BehaviorSubject, firstValueFrom, Observable, Subscription } from "rxjs";
import { ResourcePresenter } from "../resource-presenter";


@Injectable()
export class CodeService {
    private readonly subscriptions: Subscription[] = [];
    private readonly code = new BehaviorSubject<CodeContext>(this.defaultCode);

    private readonly _index = new Map<string, FileEntry>();
    private _node?: Node;
    private _user?: AuthUser;
    private _urls?: UrlSegment[];

    get defaultCode(): CodeContext {
        return { state: 'LOADING' };
    }

    get codeChange(): Observable<CodeContext> {
        return this.code.asObservable();
    }

    constructor(
        private readonly authService: AuthService,
        private readonly presenter: ResourcePresenter
    ) { }

    private async refreshFile(node: Node): Promise<void> {
        if (!node.isLeaf) {
            this.code.next({
                ...this.code.value,
                file: { state: 'ERROR' }
            });
            return;
        }

        const entry = this._index.get(node.key);
        if (entry === undefined) {
            this.code.next({
                ...this.code.value,
                file: { state: 'ERROR' }
            });
            return;
        };

        const content = await this.presenter.getFileContent(entry);
        if (content == undefined) {
            this.code.next({
                ...this.code.value,
                file: { state: 'ERROR' }
            });
            return;
        };


        this.code.next({
            ...this.code.value,
            file : {
                state: 'READY',
                entry: entry,
                content: content
            }
        });
    }

    private async refreshTree(): Promise<void> {
        const [user, tree] = await Promise.all([
            this.authService.ready(),
            this.presenter.fileTree().toPromise()
        ]);

        this._index.clear();
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
            this._node = {
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

        this._user = user;
    }

    private async refresh(): Promise<void> {

        if (!this._node) {
            return;
        }

        if (!this._user) {
            this.code.next({ state: 'UNAUTHORIZED' });
            return;
        }

        const route = this.changeRoute(this._urls || []);
        if (!route) {
            this.code.next({ state: 'NOT_FOUND' });
            return;
        }

        this.code.next({
            state: 'READY',
            user: this._user,
            urls: this._urls,
            node: route,
            file: { state: 'LOADING' }
        });

        this.refreshFile(route);
    }

    private compareNodes(a: Node, b: Node) {
        if ((a.isLeaf && b.isLeaf) || (!a.isLeaf && !b.isLeaf)) {
            return a.title.localeCompare(b.title);
        }
        return a.isLeaf ? 1 : -1;
    }

    private changeRoute(urls: UrlSegment[]): Node | undefined {
        if (!this._node) {
            return;
        }
        let route: Node = this._node;
        for (const url of urls) {
            if (route && !route.isLeaf && route.children) {
                let result = route.children.find((entry) => entry.title === url.path);
                if (result === undefined) {
                    return;
                }
                route = result;
            } else {
                return;
            }
        }
        return route;
    }

    async onContextChange(): Promise<void> {
        try {
            await this.refreshTree();
            this.refresh();
        } catch (error) {
            const status = (error as any).status || 500;
            if (status >= 400 && status < 500) {
                this.code.next({ state: 'NOT_FOUND' });
            } else {
                this.code.next({ state: 'SERVER_ERROR' });
            }
        }
    }

    async onChangeRoute(urls: UrlSegment[]): Promise<void> {
        this._urls = urls;
        this.refresh();
    }

}

export interface CodeFileContext {
    state: 'LOADING' | 'READY' | 'ERROR';
    entry?: FileEntry;
    content?: string;
}

export interface CodeContext {
    state: 'LOADING' | 'READY' | 'SERVER_ERROR' | 'NOT_FOUND' | 'UNAUTHORIZED';
    user?: AuthUser;
    urls?: UrlSegment[];
    node?: Node;
    file?: CodeFileContext;
}

export interface Node {
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
