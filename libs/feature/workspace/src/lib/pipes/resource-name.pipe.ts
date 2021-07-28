import { Pipe, PipeTransform } from '@angular/core';
import { ResourceTypes } from '../models/resource';


const NAMES: Record<ResourceTypes, string> = {
    MODEL: 'Modèle',
    EXERCISE: 'Exercice',
    ACTIVITY: 'Activité'
};

@Pipe({
    name: 'resourceName',
})
export class ResourceNamePipe implements PipeTransform {
    transform(type: ResourceTypes): string {
        return NAMES[type];
    }
}
