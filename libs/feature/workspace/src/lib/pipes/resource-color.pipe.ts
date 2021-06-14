import { Pipe, PipeTransform } from '@angular/core';
import { ResourceTypes, RESOURCE_COLORS } from '../models/resource';

@Pipe({
    name: 'resourceColor',
})
export class ResourceColorPipe implements PipeTransform {
    transform(type: ResourceTypes): string {
        return RESOURCE_COLORS[type];
    }
}
