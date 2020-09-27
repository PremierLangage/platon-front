import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    HostBinding,
    HostListener,
    Injector,
    Input,
} from '@angular/core';
import { WebComponent, WebComponentHooks } from '../../web-components';
import { TextSelect, TextSelectComponentDefinition } from './text-select';

// https://javascript.info/selection-range

const SELECT_INDEX_ATTRIBUTE = 'data-select-index';
const HIGHLIGHT_CLASS_NAME = 'highlight-state';

@Component({
    selector: 'wc-text-select',
    templateUrl: 'text-select.component.html',
    styleUrls: ['text-select.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
@WebComponent(TextSelectComponentDefinition)
export class TextSelectComponent implements WebComponentHooks<TextSelect> {
    @Input() state!: TextSelect;

    private lastText = '';

    get container() {
        const native = this.el.nativeElement;
        let container = native.firstElementChild as HTMLElement;
        if (container.tagName !== 'DIV') {
            container = document.createElement('div');
            native.insertBefore(container, native.firstElementChild);
        }
        container.className = 'cursor-pointer';
        if (this.state.mode === 'free') {
            container.className = 'cursor-text';
        }
        return container;
    }

    constructor(
        readonly injector: Injector,
        private readonly el: ElementRef<HTMLElement>
    ) {}

    onSetState() {
        if (this.state.text !== this.lastText) {
            this.lastText = this.state.text;
            switch (this.state.mode) {
                case 'units':
                    this.renderModeUnits();
                    break;
                case 'free':
                    this.renderModeFree();
                    break;
                default:
                    this.renderModeRegex();
                    break;
            }
        }
        this.highlightSelections();
    }

    @HostListener('mouseup', ['$event'])
    onMouseUp(event: MouseEvent) {
        if (this.state.mode === 'free') {
            this.createSelectionFromMouse();
        } else {
            this.createSelectionFromEvent(event);
        }
    }

    private createSelectionFromMouse() {
        const selection = (window.getSelection || document.getSelection)();
        // selection.anchorNode is a textContent and parentElement is the span
        const startNode = selection?.anchorNode?.parentElement;
        const endNode = selection?.focusNode?.parentElement;

        const idx1 = Number.parseInt(
            startNode?.getAttribute(SELECT_INDEX_ATTRIBUTE) || '',
            10
        );
        const idx2 = Number.parseInt(
            endNode?.getAttribute(SELECT_INDEX_ATTRIBUTE) || '',
            10
        );
        if (Number.isNaN(idx1) || Number.isNaN(idx2)) {
            return;
        }

        const startIndex = Math.min(idx1, idx2);
        const endIndex = Math.max(idx1, idx2);

        const selections = this.state.selections;
        for (let i = 0; i < selections.length; i++) {
            const item = selections[i];
            if (typeof item.position === 'object') {
                const range = item.position as number[];
                const startIndexInRange = startIndex >= range[0] && startIndex <= range[1];
                const endIndexInRange = endIndex >= range[0] && startIndex <= range[1];
                if (startIndexInRange || endIndexInRange) {
                    selections.splice(i, 1);
                    return;
                }
            }
        }

        this.state.selections.push({
            position: [startIndex, endIndex],
        });
    }

    private createSelectionFromEvent(event: MouseEvent) {
        if (!(event.target instanceof HTMLElement))
            return;

        const container = this.container;

        let node: HTMLElement = event.target;
        if (container.isSameNode(node) || !container.contains(node))
            return;

        // try to find the first parent of target that has ${SELECT_INDEX_ATTRIBUTE} attribute
        while (node.getAttribute(SELECT_INDEX_ATTRIBUTE) == null) {
            node = node.parentElement as HTMLElement;
            if (node == null)
                return;

            if (node.isSameNode(container)) // limit search to container boundary.
                return;
        }

        const index = Number.parseInt(
            node.getAttribute(SELECT_INDEX_ATTRIBUTE) || '',
            10
        );

        if (!Number.isNaN(index)) {
            let i = 0;
            for (const item of this.state.selections) {
                if (item.position === index) {
                    this.state.selections.splice(i, 1);
                    return;
                }
                i++;
            }
            this.state.selections.push({
                position: index,
            });
        }
    }

    private renderModeFree() {
        this.container.innerHTML = this.state.text.trim();
        let index = 0;
        const walk = (node: Element) => {
            if (node.nodeType === Node.TEXT_NODE) {
                const wrapper = document.createElement('span');
                for (const c of node.textContent as string) {
                    if (c === '\n') continue;
                    const span = document.createElement('span');
                    span.innerText = c;
                    span.setAttribute(SELECT_INDEX_ATTRIBUTE, (index++).toString());
                    wrapper.appendChild(span);
                }
                node.parentElement?.replaceChild(wrapper, node);
                return;
            }
            Array.from(node.childNodes).forEach((childNode) =>
                walk(childNode as Element)
            );
        };
        walk(this.container);
    }

    private renderModeUnits() {
        let index = 0;
        this.container.innerHTML = this.state.text.replace(
            /\{([^}]+?)\}/gm,
            (_, group) => {
                return `<span ${SELECT_INDEX_ATTRIBUTE}="${index++}">${group}</span>`;
            }
        );
    }

    private renderModeRegex() {
        let index = 0;
        this.container.innerHTML = this.state.text
            .trim()
            .replace(new RegExp(this.state.mode, 'gm'), (match) => {
                return `<span ${SELECT_INDEX_ATTRIBUTE}="${index++}">${match}</span>`;
            });
    }

    private highlightRange(i: number, j: number) {
        const container = this.container;
        const selectedText: string[] = [];
        for (let index = i; index <= j; index++) {
            const node = container.querySelector(`[${SELECT_INDEX_ATTRIBUTE}="${index}"]`);
            if (node) {
                node.className = HIGHLIGHT_CLASS_NAME;
                selectedText.push(node.innerHTML);
            }
        }
        return selectedText.join('');
    }

    private highlightSelections() {
        const container = this.container;
        container.querySelectorAll(`[${SELECT_INDEX_ATTRIBUTE}]`).forEach(node => {
            node.className = '';
        });

        this.state.selections.forEach(item => {
            if (typeof item.position === 'number') {
                const node = container.querySelector(`[${SELECT_INDEX_ATTRIBUTE}="${item.position}"]`);
                if (node) {
                    node.className = HIGHLIGHT_CLASS_NAME;
                    if (item.content !== node.textContent) {
                        item.content = node.textContent as string;
                    }
                }
            } else {
                const content = this.highlightRange(item.position[0], item.position[1]);
                if (item.content !== content) {
                    item.content = content;
                }
            }
        });
    }
}
