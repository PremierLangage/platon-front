import { Pipe, PipeTransform } from '@angular/core';
import { AssetTypes } from '../models/asset';

const NAMES: Record<AssetTypes, string> = {
    COURS: 'Cours',
    ACTIVITY: 'Activité',
    EXERCICE: 'Exercice',
};

@Pipe({
    name: 'assetName',
})
export class AssetNamePipe implements PipeTransform {
    transform(type: AssetTypes): string {
        return NAMES[type];
    }
}
