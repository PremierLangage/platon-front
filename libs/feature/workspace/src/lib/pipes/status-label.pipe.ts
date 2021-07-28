import { Pipe, PipeTransform } from '@angular/core';
import { ResourceStatus } from '../models/resource';

const LABELS: Record<ResourceStatus, string> = {
    DRAFT: 'Brouillon',
    READY: "Prêt à l'utilisation",
    BUGGED: 'Contient des bugs',
    NOT_TESTED: "Besoin d'être tester",
    DEPRECATED: 'Ne pas utiliser'
};

@Pipe({
    name: 'statusLabel'
})
export class StatusLabelPipe implements PipeTransform {
    transform(status: ResourceStatus): string {
        return LABELS[status];
    }
}
