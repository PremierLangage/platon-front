import { Pipe, PipeTransform } from '@angular/core';
import { ResourceStatus, STATUS_LABELS } from '../models/models';

@Pipe({
    name: 'statusLabel'
})
export class StatusLabelPipe implements PipeTransform {
    transform(status: ResourceStatus): string {
        return STATUS_LABELS[status];
    }
}
