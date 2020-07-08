import { AfterViewInit, Component, ElementRef, EventEmitter, Output, ViewChild, Input, OnInit, OnDestroy } from '@angular/core';

@Component({
    selector: 'wc-base',
    templateUrl: './base.component.html',
    styleUrls: ['./base.component.scss'],
})
export class BaseComponent implements OnInit, OnDestroy, AfterViewInit {
    @ViewChild('container') container!: ElementRef;

    @Input() state: any;
    @Output() stateChange = new EventEmitter<any>();

    private observer?: MutationObserver;

    constructor(
        private readonly elementRef: ElementRef
    ) {}

    ngOnInit() {
        const native: HTMLElement = this.elementRef.nativeElement;
        this.observer = new MutationObserver(mutations => {
            mutations.forEach(this.onChangeAttributes.bind(this))
        });
        this.observer.observe(native.parentElement as HTMLElement, {
            attributes: true
        });
        this.onChangeAttributes();
    }

    ngOnDestroy() {
        this.observer?.disconnect();
    }

    ngAfterViewInit() {
        this.onChangeContent();
    }

    onChangeContent() {
        const native: HTMLElement = this.container.nativeElement;
        const xml = Array.from(
            native.childNodes
        ).find(node => {
            return node.nodeType === Node.ELEMENT_NODE && (node as HTMLElement).tagName === 'XML';
        });
        if (xml) {
            const state = this.xml2json(xml as HTMLElement);
            this.stateChange.emit(state)
        }
    }

    onChangeAttributes() {
        const native: HTMLElement = this.elementRef.nativeElement;
        const parent = native.parentElement as HTMLElement;
        const attributes = parent.attributes;
        const state: Record<string, any> = {};
        let changed = false;
        for (const attribute of Array.from(attributes)) {
            if (this.isWebcomponentAttribute(attribute)) {
                changed = true;
                state[attribute.name.replace('wc-', '')] = this.parseText(attribute.value);
            }
        }
        if (changed) {
            this.stateChange.emit(state);
        }
    }

    /**
     * This function coverts a DOM Tree into JavaScript Object.
     * @param srcDOM: DOM Tree to be converted.
     */
    xml2json(srcDOM: HTMLElement) {
        const children = Array.from(srcDOM.children);

        // base case for recursion.
        if (!children.length) {
            return this.parseText(srcDOM.innerHTML);
        }

        // initializing object to be returned.
        const json: Record<string, any> = {};

        for (const child of children) {
            const childName = child.nodeName.toLowerCase();
            // checking is child has siblings of same name.
            const childIsArray = children.filter(eachChild => eachChild.nodeName === child.nodeName).length > 1;
            // if child is array, save the values as array, else as strings.
            if (childIsArray) {
                if (json[childName] === undefined) {
                    json[childName] = [this.xml2json(child as any)];
                } else {
                    json[childName].push(this.xml2json(child as any));
                }
            } else {
                json[childName] = this.parseText(child.innerHTML);
            }
        }

        return json;
    }

    private parseText(text: string) {
        if (text.trim().match(/^(true|false|\d+)$/)) {
            return JSON.parse(text);
        } else {
            return text;
        }
    }

    private isWebcomponentAttribute(attribute: Attr) {
        return attribute.name.startsWith('wc-');
    }
}
