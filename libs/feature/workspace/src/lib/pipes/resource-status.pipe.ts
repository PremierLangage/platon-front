import { Pipe, PipeTransform } from '@angular/core';
import { ResourceStatus } from '../models/resource';

@Pipe({
    name: 'resourceStatus'
})
export class ResourceStatusPipe implements PipeTransform {
    private readonly colors: Record<ResourceStatus, string> = {
        DRAFT: 'blue',
        READY: 'green',
        BUGGED: 'magenta',
        NOT_TESTED: 'gold',
        DEPRECATED: 'red'
    };

    private readonly labels: Record<ResourceStatus, string> = {
        DRAFT: 'Brouillon',
        READY: 'Prêt à l\'utilisation',
        BUGGED: 'Contient des bugs',
        NOT_TESTED: 'Besoin d\'être tester',
        DEPRECATED: 'Ne pas utiliser'
    };

    transform(status: ResourceStatus, colorOrLabel: 'color' | 'label'): string {
        if (colorOrLabel === 'color') {
            return this.colors[status];
        }
        return this.labels[status];
    }
}
