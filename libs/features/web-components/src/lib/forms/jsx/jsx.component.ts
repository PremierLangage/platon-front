import {
    ChangeDetectionStrategy,
    Component, Injector,
    Input,
    OnDestroy, OnInit
} from '@angular/core';
import { AssetLoaderService, deepEqual } from '@platon/shared/utils';
import { batchUpdate, WebComponent, WebComponentHooks } from '../../web-components';
import { Jsx, JsxComponentDefinition } from './jsx';

declare const JXG: any;

@Component({
    selector: 'wc-jsx',
    templateUrl: 'jsx.component.html',
    styleUrls: ['jsx.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
@WebComponent(JsxComponentDefinition)
export class JsxComponent implements OnInit, OnDestroy, WebComponentHooks<Jsx> {
    private static NEXT_ID = 0;
    private board?: any;
    private currentScript?: string;
    private currentAttributes = {};

    readonly boardId = 'jsx_graph' + ++JsxComponent.NEXT_ID;

    @Input() state!: Jsx;

    constructor(
        readonly injector: Injector,
    ) {}

    async ngOnInit() {
        const assets = this.injector.get(AssetLoaderService);
        await assets
            .loadAllSync([
                ['script', 'assets/vendors/jsxgraph/jsxgraphcore.js'],
                ['style', 'assets/vendors/jsxgraph/jsxgraph.css'],
            ])
            .toPromise();
        JXG.Options = JXG.merge(JXG.Options, {
            board: {
                showCopyright: false,
                keepAspectRatio: true,
            },
            elements: {
                highlight: false,
                showInfobox: false,
            },
            point: {
                showInfobox: false,
            },
        });
        this.createBoard();
    }

    ngOnDestroy() {
        this.destroyBoard();
    }

    onSetState() {
        const scriptChanged = !deepEqual(this.state.script, this.currentScript);
        const attribChanged = !deepEqual(this.state.attributes, this.currentAttributes);
        if (scriptChanged || attribChanged) {
            this.createBoard();
        }
        this.writePoints();
        if (this.state.disabled) {
            this.board.removeEventHandlers();
        } else if (!this.board.hasPointerHandlers) {
            this.board.addEventHandlers()
        }
    }

    private createBoard() {
        this.destroyBoard();
        this.board = JXG.JSXGraph.initBoard(this.boardId, {
            axis: true,
            ...(this.state.attributes || {})
        });

        this.board.on('update', () => {
            batchUpdate(this, () => {
                this.readPoints();
            });
        });

        this.currentScript = this.state.script;
        this.currentAttributes = this.state.attributes;

        const code = decodeURIComponent(this.state.script);
        const exec = new Function('board', code);
        exec(this.board);
        this.readPoints();
    }

    private destroyBoard() {
        if (this.board) {
            JXG.JSXGraph.freeBoard(this.board);
        }
    }

    private readPoints() {
        this.state.points = {};
        if (this.board.objectsList) {
            for (const o of this.board.objectsList) {
                if (JXG.isPoint(o) && o.name) {
                    this.state.points[o.name] = {
                        x: o.X(),
                        y: o.Y(),
                    };
                }
            }
        }
    }

    private writePoints() {
        let updateNeeded = false;
        const names = Object.keys(this.state.points);
        for (const name of names) {
            const object = this.board.objectsList.find((o: any) => {
                return JXG.isPoint(o) && o.name === name;
            });
            if (object) {
                const point = this.state.points[name];
                const array = [point.x, point.y];
                object.setPosition(JXG.COORDS_BY_USER, array);
                updateNeeded = true;
            }
        }

        if (updateNeeded) {
            this.board.fullUpdate();
        }
    }
}
