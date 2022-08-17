import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input } from "@angular/core";

@Component({
    selector: 'app-asset-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AssetFormComponent {

    @Input()
    set content(value: any) {
        if (value) {
            this.updateComponent(value);
        }
    }

    get content() {
        const native = this.elementRef.nativeElement;
        const proxy = (native.firstElementChild as any).state
        return this.getComponentState(proxy);
    }

    constructor(
        private elementRef: ElementRef,
        private readonly changeDetectorRef: ChangeDetectorRef,
    ) { }

    private updateComponent(content: Record<string, any>) {
        const component: string = content.form
                .replace('{{', '')
                .replace('|component}}', '');
        this.elementRef.nativeElement.innerHTML = this.getComponent(content[component]);
        this.changeDetectorRef.markForCheck();
    }

    private getComponent(component: Record<string, any>): string {
        const selector = component['selector'];
        return `
            <${selector} ${this.getComponentAttributes(component)}></${selector}>
        `;
    }

    private getComponentAttributes(attributes: Omit<Record<string, any>, 'selector'>): string {
        return Object.entries(attributes).map(entry => {
            const [key, value] = entry;
            if (typeof(value) === 'object') {
                return `${key}='${JSON.stringify(value).replace(/'/g, '&#39;')}'`;
            } else {
                return `${key}='${value}'`;
            }
        }).join(' ');
    }

    private getComponentState(proxy: any): Record<string, any> {
        const state: Record<string, any> = {};
        Object.keys(proxy).forEach((item) => {
            if (typeof(proxy[item]) === 'object') {
                state[item] = this.getComponentState(proxy[item]);
            } else {
                state[item] = proxy[item];
            }
        })
        return state;
    }

}
