import { Pipe, PipeTransform } from '@angular/core';
import { ResourceStatus, STATUS_COLORS } from '../models/resource';

@Pipe({
    name: 'statusColor',
})
export class StatusColorPipe implements PipeTransform {
    transform(status: ResourceStatus): string {
        return STATUS_COLORS[status];
    }
}
