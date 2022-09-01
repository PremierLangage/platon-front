import { ElementRef, Pipe, PipeTransform } from '@angular/core';
import { WebComponentService } from '@platon/feature/web-component';

@Pipe({
    name: 'component',
})
export class PlatonPipe implements PipeTransform {
    constructor(
        private eRef: ElementRef,
        readonly webService: WebComponentService
    ) {}

    transform(value: string) {
        const component = this.webService.findBySelector(value);
        if (component === undefined) {
            return null;
        }
        return component;
    }
}
