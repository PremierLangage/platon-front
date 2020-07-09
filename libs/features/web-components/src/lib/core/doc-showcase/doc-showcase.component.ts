import { AfterViewChecked, Component, ElementRef, Input, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { JsonEditorComponent, JsonEditorOptions } from 'ang-jsoneditor';

@Component({
  selector: 'wc-doc-showcase',
  templateUrl: './doc-showcase.component.html',
  styleUrls: ['./doc-showcase.component.scss']
})
export class DocShowcaseComponent implements OnInit, OnDestroy {

    @Input() selector = '';

    @ViewChild(JsonEditorComponent)
    readonly editor?: JsonEditorComponent;
    readonly options = new JsonEditorOptions();

    private webcomponent?: any;
    private interval?: number;

    showEditor = false;
    state: Record<string, any> = {};

    constructor(
        private readonly element: ElementRef,
    ) { }

    ngOnInit() {
        this.options.modes = ['code', 'text', 'tree', 'view'];
        this.options.language = 'fr-FR';
        this.options.onChange = this.onChangeEditorContent.bind(this);

        this.interval = setInterval(() => {
            this.webcomponent = this.element.nativeElement.querySelector(this.selector);
            if (this.webcomponent) {
                const state = this.webcomponent.state;
                if (state) {
                    this.state = state;
                    clearInterval(this.interval);
                }
            }
        }, 500);
    }

    ngOnDestroy() {
        clearInterval(this.interval);
    }

    private onChangeEditorContent() {
        try {
            const state = this.editor?.get();
            if (state && this.webcomponent) {
                this.webcomponent.state = state;
            }
        } catch (error) {
            console.log(error);
        }
    }
}
