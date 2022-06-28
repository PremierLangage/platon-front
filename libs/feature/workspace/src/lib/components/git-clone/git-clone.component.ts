import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FileTree } from '../../models/file';

@Component({
    selector: 'ws-git-clone',
    templateUrl: './git-clone.component.html',
    styleUrls: ['./git-clone.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GitCloneComponent {

    @Input()
    set tree(value: FileTree | undefined) {
    }

    private compareNodes(a: Node, b: Node) {
        if ((a.isLeaf && b.isLeaf) || (!a.isLeaf && !b.isLeaf)) {
            return a.title.localeCompare(b.title);
        }
        return a.isLeaf ? 1 : -1;
    }

}
interface Context {
    state: 'LOADING' | 'READY' | 'NOT_FOUND' | 'ERROR';
    repository?: any;
}

interface Node {
    key: string;
    title: string;
    isLeaf?: boolean;
    children?: Node[];
}
