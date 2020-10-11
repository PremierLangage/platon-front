import { AfterViewChecked, AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, Injector, Input, OnDestroy, ViewChild } from '@angular/core';
import { Connection, Endpoint, jsPlumb, jsPlumbInstance } from 'jsplumb';
import { WebComponent, WebComponentHooks } from '../../web-components';
import { MatchList, MatchListComponentDefinition, MatchListItem } from './match-list';

@Component({
    selector: 'wc-match-list',
    templateUrl: 'match-list.component.html',
    styleUrls: ['match-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
@WebComponent(MatchListComponentDefinition)
export class MatchListComponent implements AfterViewInit, AfterViewChecked, OnDestroy, WebComponentHooks<MatchList> {
    @Input() state!: MatchList;

    @ViewChild('container', { static: true })
    container!: ElementRef<HTMLElement>;

    private ready = false;
    private width = 0;
    private height = 0;
    private instance?: jsPlumbInstance;
    private selectedPoints: Endpoint[] = [];

    get sources() {
        return this.state.nodes.filter(e => e.type === 'source');
    }

    get targets() {
        return this.state.nodes.filter(e => e.type === 'target');
    }

    constructor(
        readonly injector: Injector,
    ) {}

    ngAfterViewInit() {
        this.instance = jsPlumb.getInstance({
            Container: this.container.nativeElement,
            ConnectionsDetachable: false,
            Endpoint: [ 'Dot', { radius: 6 } ],
            Connector: 'StateMachine',
            PaintStyle: {
                strokeWidth: 4,
                stroke: '#456',
            },
            HoverPaintStyle: {
                stroke: '#FF4500'
            },
            EndpointHoverStyle: {
                stroke: '#FF4500',
                fill: '#FF4500',
            },
            ConnectionOverlays: [
                ['Arrow', { width: 16, length: 16, location: .98, id: 'arrow' }],
            ],
            DragOptions: { cursor: 'pointer', zIndex: 2000 },
        });

        this.instance.bind('ready', () => {
            this.ready = true;
            this.onSetState();
        });
    }

    ngAfterViewChecked() {
        const { offsetWidth, offsetHeight } = this.container.nativeElement;
        if (this.width !== offsetWidth || this.height !== offsetHeight) {
            if (this.width !== 0 && this.height !== 0) {
                this.instance?.repaintEverything();
            }
        }
        this.width = offsetWidth;
        this.height = offsetHeight;
    }

    ngOnDestroy() {
        this.instance?.unbind();
    }

    onSetState() {
        if (!this.ready)
            return;

        this.instance?.batch(() => {
            setTimeout(() => {
                this.removeListeners();
                this.instance?.setSuspendEvents(this.state.disabled);
                this.instance?.deleteEveryEndpoint();
                this.renderConnections();
                this.renderEndPoints();
                this.attachListeners();
            }); // the browser freeze without the call to setTimeout
        });
    }

    trackBy(index: number, item: MatchListItem) {
        return item.id || index;
    }

    private renderEndPoints() {
        this.state.nodes.forEach(node => {
            this.instance?.addEndpoint(node.id, {
                id: node.id,
                isSource: node.type === 'source',
                isTarget: node.type === 'target',
                anchor: node.type === 'source' ? 'Right' : 'Left',
                maxConnections: this.state.disabled ? 0 : -1,
            });
        });
    }

    private renderConnections() {
        this.state.links.forEach(link => {
            if (!link.source || !link.target)
                return;

            this.instance?.connect({
                source: link.source,
                target: link.target,
                anchors: ['RightMiddle', 'LeftMiddle'],
                cssClass: link.css
            });
        });
    }

    private attachListeners() {
        this.instance?.bind('click', connection => {
            this.instance?.deleteConnection(connection);
        });
        this.instance?.bind('connection', info => {
            this.onCreateConnection(info.connection);
        });
        this.instance?.bind('connectionDetached', info => {
            this.onRemoveConnection(info.connection);
        });
        this.instance?.bind('endpointClick', info => {
            const point = <any>info as Endpoint;
            this.selectPoint(point);
            if (this.selectedPoints.length >= 2) {
                const source = this.selectedPoints.find(e => (<any>e).isSource);
                const target = this.selectedPoints.find(e => (<any>e).isTarget);
                if (!source || !target) {
                    const top = this.selectedPoints[1];
                    this.unselectPoints();
                    this.selectPoint(top);
                } else {
                    this.unselectPoints();
                    this.state.links.push({
                        source: source.getElement().id,
                        target: target.getElement().id
                    });
                }
            }
        });
    }

    private removeListeners() {
        this.instance?.unbind('click');
        this.instance?.unbind('connection');
        this.instance?.unbind('connectionDetached');
        this.instance?.unbind('endpointClick');
    }

    private selectPoint(point: Endpoint) {
        const canvas = (<any>point).canvas as HTMLElement;
        canvas.classList.remove('selected');
        canvas.classList.add('selected');
        this.selectedPoints.push(point);
    }

    private unselectPoints() {
        this.selectedPoints.forEach(point => {
            const canvas = (<any>point).canvas as HTMLElement;
            canvas.classList.remove('selected');
        });
        this.selectedPoints = [];
    }

    private indexOfConnection(connection: Connection) {
        const links = this.state.links;
        for (let i = 0; i < this.state.links.length; i++) {
            const link = links[i];
            if (link.source === connection.sourceId && link.target === connection.targetId) {
                return i;
            }
        }
        return -1;
    }

    private onCreateConnection(connection: Connection) {
        const index = this.indexOfConnection(connection);
        if (index !== -1)
            return;

        this.state.links.push({
            source: connection.sourceId,
            target: connection.targetId
        });
    }

    private onRemoveConnection(connection: Connection) {
        const index = this.indexOfConnection(connection);
        if (index !== -1) {
            this.state.links.splice(index, 1);
        }
    }

}

