import { NgModule, Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'component',
})
export class ComponentPipe implements PipeTransform {
    transform(value: any): string {
        const component: string = value?.form
            .replace('{{', '')
            .replace('|component}}', '');

        const selector: string = value[component]?.selector;
        const state: object = value[component]?.state;
        return (
            `<${selector} state='` + JSON.stringify(state) + `'></${selector}>`
        );
    }
}

@NgModule({
    declarations: [ComponentPipe],
    exports: [ComponentPipe],
})
export class ComponentPipeModule {}
