import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'componentExtractor',
})
export class ComponentExtractorPipe implements PipeTransform {
    transform(value: any): string {
        const component: string = value?.form
            .replace('{{', '')
            .replace('|component}}', '');

        return component;
    }
}
