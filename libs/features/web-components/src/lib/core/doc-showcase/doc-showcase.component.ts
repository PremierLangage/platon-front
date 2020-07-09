import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { JsonEditorComponent, JsonEditorOptions } from 'ang-jsoneditor';

@Component({
  selector: 'wc-doc-showcase',
  templateUrl: './doc-showcase.component.html',
  styleUrls: ['./doc-showcase.component.scss']
})
export class DocShowcaseComponent implements OnInit {

    @Input() selector = '';

    @ViewChild(JsonEditorComponent)
    readonly editor?: JsonEditorComponent;

    readonly options = new JsonEditorOptions();

    showEditor = false;

    state: Record<string, any> = {};

    constructor(
        private readonly element: ElementRef,
    ) { }

    ngOnInit() {
        this.options.modes = ['code', 'text', 'tree', 'view'];
        this.options.language = 'fr-FR';
        setTimeout(() => {
            const native: HTMLElement = this.element.nativeElement;
            const webcomponent = native.querySelector(this.selector);
                if (webcomponent) {
                    this.state = (webcomponent as any).state;
                    this.options.onChange = () => {
                        try {
                            const state = this.editor?.get();
                            if (state) {
                                (webcomponent as any).state = state;
                            }
                        } catch (error) {
                            console.log(error);
                        }
                    }
                }
        }, 100);
    }

}
