import { Pipe, PipeTransform } from '@angular/core';
import { ResourceStatus, RESOURCE_COLORS, RESOURCE_LABELS } from '../models/resource';

@Pipe({
    name: 'resourceStatus'
})
export class ResourceStatusPipe implements PipeTransform {
    transform(status: ResourceStatus, colorOrLabel: 'color' | 'label'): string {
        if (colorOrLabel === 'color') {
            return RESOURCE_COLORS[status];
        }
        return RESOURCE_LABELS[status];
    }
}
