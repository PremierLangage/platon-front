import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { AssetTypes } from '@platon/feature/workspace';


const ICONS: Record<AssetTypes, string> = {
    COURS: 'blue',
    EXERSICE: 'article',
    ACTIVITY: 'widgets',
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
