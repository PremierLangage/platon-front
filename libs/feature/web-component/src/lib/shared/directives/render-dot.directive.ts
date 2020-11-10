import { Directive, ElementRef, Input, NgModule, OnChanges, OnInit } from '@angular/core';
import { AssetLoaderService } from '@platon/shared/utils';
import { graphviz } from 'd3-graphviz';

// https://github.com/magjac/d3-graphviz/tree/v2.6.1

@Directive({
    // tslint:disable-next-line: directive-selector
  selector: '[renderDot]'
})
export class RenderDotDirective implements OnInit, OnChanges {
    private ready = false;

    @Input('renderDot')
    dot?: string;

    constructor(
        private el: ElementRef,
        private readonly assets: AssetLoaderService
    ) {}

    ngOnInit() {
        this.assets.loadAllAsync([
            ['script', '/assets/vendors/viz/viz.js']
        ]).toPromise().then(() => {
            this.ready = true;
            this.render();
        });
    }

    ngOnChanges() {
        if (this.ready) {
            this.render();
        }
    }

    private render() {
        if (this.el && this.dot) {
            const viz = graphviz(this.el.nativeElement, {
                zoom: false,
                fit: true,
                useWorker: true
            });
            viz.renderDot(this.dot || '');
        }
    }
}

@NgModule({
    exports: [RenderDotDirective],
    declarations: [RenderDotDirective],
})
export class RenderDotModule { }
