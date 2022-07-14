import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input } from "@angular/core";

@Component({
    selector: 'app-asset-exercice',
    templateUrl: './exercice.component.html',
    styleUrls: ['./exercice.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AssetExerciceComponent {

    @Input()
    set content(value: any) {
        if (value) {
            this.updateComponent(value);
        }
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
                return `${key}='${JSON.stringify(value)}'`;
            } else {
                return `${key}='${value}'`;
            }
        }).join(' ');
    }

}
