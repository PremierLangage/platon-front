import { Pipe, PipeTransform } from '@angular/core';
import { ResourceTypes, RESOURCE_ICONS } from '../models/resource';

@Pipe({
    name: 'resourceIcon',
})
export class ResourceIconPipe implements PipeTransform {
    transform(type: ResourceTypes): string {
        return RESOURCE_ICONS[type];
    }
}
