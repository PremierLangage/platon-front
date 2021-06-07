import { SelectionModel } from '@angular/cdk/collections';
import { FlatTreeControl } from '@angular/cdk/tree';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CircleTree } from '@platon/feature/workspace';
import { NzTreeFlatDataSource, NzTreeFlattener } from 'ng-zorro-antd/tree-view';

@Component({
    selector: 'ws-circle-tree',
    templateUrl: './circle-tree.component.html',
    styleUrls: ['./circle-tree.component.scss']
})
export class CircleTreeComponent implements OnInit {
    @Input() tree!: CircleTree;

    @Input() selection?: number;
    @Output() selectionChange = new EventEmitter<number>();

    private transformer = (node: CircleTree, level: number) => {
        const existingNode = this.nestedNodeMap.get(node);
        const flatNode =
            existingNode && existingNode.id === node.id
                ? existingNode
                : {
                    id: node.id,
                    name: node.name,
                    level: level,
                    expandable: !!node.children && node.children.length > 0,
                };
        flatNode.name = node.name;
        this.flatNodeMap.set(flatNode, node);
        this.nestedNodeMap.set(node, flatNode);
        return flatNode;
    };

    flatNodeMap = new Map<FlatNode, CircleTree>();
    nestedNodeMap = new Map<CircleTree, FlatNode>();
    checklistSelection = new SelectionModel<FlatNode>(true);

    treeControl = new FlatTreeControl<FlatNode>(
        node => node.level,
        node => node.expandable
    );
    treeFlattener = new NzTreeFlattener(
        this.transformer,
        node => node.level,
        node => node.expandable,
        node => node.children
    );


    dataSource = new NzTreeFlatDataSource(this.treeControl, this.treeFlattener);

    hasChild = (_: number, node: FlatNode) => node.expandable;
    trackBy = (_: number, node: FlatNode) => `${node.id}-${node.name}`;

    get selectable(): boolean {
        return this.selectionChange.observers.length > 0;
    }

    ngOnInit() {
        this.dataSource.setData([this.tree]);
        this.treeControl.expand(this.treeControl.dataNodes[0]);
        if (this.selection) {
            for (const node of this.flatNodeMap.keys()) {
                if (node.id === this.selection) {
                    this.selectionToggle(node);
                    return;
                }
            }
            this.selectionChange.emit(this.selection = undefined);
        }
    }

    selectionToggle(node: FlatNode): void {
        if (this.checklistSelection.isSelected(node)) {
            this.checklistSelection.clear();
            this.selectionChange.emit(undefined);
        } else {
            this.checklistSelection.clear();
            this.checklistSelection.select(node)
            this.selectionChange.emit(node.id);
        }
    }

    link(node: FlatNode) {
        return this.selectable ? undefined : ['/circle', node.id];
    }
}

interface FlatNode {
    id: number;
    name: string;
    expandable: boolean;
    level: number;
}
