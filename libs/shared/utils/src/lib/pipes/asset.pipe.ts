import { NgModule, Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'asset'
})
export class AssetPipe implements PipeTransform {

    transform(asset: any): any {
        if (!asset)
            return `<div>Error</div>`;
        switch (asset.type) {
            case 'COURS':
                return `<wc-asset-cours-viewer
                        state='`+JSON.stringify(asset)+`'
                    ></wc-asset-cours-viewer>`
            case 'EXERCICE':
                return `<wc-asset-exercice-viewer
                        state='`+JSON.stringify(asset)+`'
                    ></wc-asset-exercice-viewer>`
            default:
                throw new Error('Unknow type: ' + asset.type);
        }
    }

}

@NgModule({
    declarations: [AssetPipe],
    exports: [AssetPipe]
})
export class AssetPipeModule { }
