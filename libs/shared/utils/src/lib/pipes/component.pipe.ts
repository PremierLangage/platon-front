import { NgModule, Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'component',
})
export class ComponentPipe implements PipeTransform {

    transform(value: any, process: any): string {
        const component: string = value
            .replace('{{', '')
            .replace('|component}}', '');

        // const selector: string = value[component]?.selector;
        // const state: object = value[component]?.state;
        // const cid: number = value[component]?.cid;

        return (
            `<${process.selector} cid=`+ process.cid +` state='` + JSON.stringify(process.state) + `'></${process.selector}>`
        );
    }
}

@NgModule({
    declarations: [ComponentPipe],
    exports: [ComponentPipe],
})
export class ComponentPipeModule {}
