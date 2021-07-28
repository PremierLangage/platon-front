import { Pipe, PipeTransform } from '@angular/core';
import { ResourceTypes } from '../models/resource';

const COLORS: Record<ResourceTypes, string> = {
    MODEL: '#d89614',
    EXERCISE: '#108ee9',
    ACTIVITY: '#f50'
};

@Pipe({
    name: 'resourceColor',
})
export class ResourceColorPipe implements PipeTransform {
    transform(type: ResourceTypes): string {
        return COLORS[type];
    }
}
