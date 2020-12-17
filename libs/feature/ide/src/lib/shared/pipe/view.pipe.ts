import { ComponentPortal } from '@angular/cdk/portal';
import { Pipe, PipeTransform } from '@angular/core';
import { View } from '../../core/views/view';

@Pipe({
    name: 'view',
})
export class ViewPipe implements PipeTransform {
    transform(value: View): ComponentPortal<any> {
        value.__component__ =
            value.__component__ || new ComponentPortal(value.component);
        return value.__component__;
    }
}
