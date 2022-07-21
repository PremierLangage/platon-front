import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { AssetTypes } from 'libs/feature/workspace/src/lib/models/asset';

const ICONS: Record<AssetTypes, string> = {
    COURS: 'blue',
    EXERCISE: 'article',
    ACTIVITY: 'widgets'
};

@Pipe({
    name: 'assetIcon',
})
export class AssetIconPipe implements PipeTransform {
    transform(type: AssetTypes): string {
        return ICONS[type];
    }
}

@NgModule({
    declarations: [AssetIconPipe],
    exports: [AssetIconPipe]
})
export class AssetIconPipeModule { }
