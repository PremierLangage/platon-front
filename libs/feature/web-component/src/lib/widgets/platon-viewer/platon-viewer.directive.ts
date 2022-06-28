import { AfterContentInit, AfterViewInit, Directive, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewContainerRef } from "@angular/core";
import { Observable, Observer } from "rxjs";
import { WebComponentDefinition } from "../../web-component";
import { WebComponentService } from "../../web-component.service";

@Directive({
    selector: "[webComponent]",
})
export class PlatonViewerHandler implements OnInit, OnDestroy {

    private componentState: Record<string, any> = {};
    private componentRef?: HTMLElement;
    private componentDefinition?: WebComponentDefinition;
    private componentObserver?: MutationObserver;

    constructor(
        private elementRef: ElementRef,
        private readonly api: WebComponentService,
    ) {}

    ngOnInit(): void {
        const native: HTMLElement = this.elementRef.nativeElement;
        this.componentRef = native.firstChild as HTMLElement;

        const selector = this.componentRef.tagName.toLowerCase();
        this.componentDefinition = this.api.findBySelector(selector || '');

        this.componentObserver = new MutationObserver(mutations => {
            mutations.forEach(this.updateStateFromAttributes.bind(this))
        });

        this.componentObserver.observe(this.componentRef, {
            attributes: true
        });

        this.updateStateFromAttributes();
    }

    ngOnDestroy(): void {
        this.componentObserver?.disconnect();
    }

    private updateStateFromAttributes() {
        const state = (this.componentRef as any).state;
        if (state) {
            this.componentState = this.updateStateFromProxy(state);
        }
    }

    private updateStateFromProxy(proxy: any): Record<string, any> {
        const state: Record<string, any> = {}
        Object.keys(proxy).forEach((item) => {
            if (typeof(proxy[item]) === 'object') {
                state[item] = this.updateStateFromProxy(proxy[item]);
            } else {
                state[item] = proxy[item];
            }
        })
        return state;
    }

    getComponentState() {
        this.updateStateFromAttributes();
        return this.componentState;
    }

}
