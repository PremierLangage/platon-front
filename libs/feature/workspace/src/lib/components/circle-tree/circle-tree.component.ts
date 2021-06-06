import { FlatTreeControl } from '@angular/cdk/tree';
import { Component, Input, OnInit } from '@angular/core';
import { CircleTree } from '@platon/feature/workspace';
import { NzTreeFlatDataSource, NzTreeFlattener } from 'ng-zorro-antd/tree-view';

@Component({
    selector: 'ws-circle-tree',
    templateUrl: './circle-tree.component.html',
    styleUrls: ['./circle-tree.component.scss']
})
export class CircleTreeComponent implements OnInit {
    @Input() tree!: CircleTree;

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

    ngOnInit() {
        this.dataSource.setData([
            this.tree
        ]);
    }

    addNewNode(node: FlatNode) {}

}

interface FlatNode {
    id: number;
    name: string;
    expandable: boolean;
    level: number;
}
