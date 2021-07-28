import { Pipe, PipeTransform } from '@angular/core';
import { ResourceTypes } from '../models/resource';

const ICONS: Record<ResourceTypes, string> = {
    MODEL: 'blue',
    EXERCISE: 'article',
    ACTIVITY: 'widgets'
};

@Pipe({
    name: 'resourceIcon',
})
export class ResourceIconPipe implements PipeTransform {
    transform(type: ResourceTypes): string {
        return ICONS[type];
    }
}
