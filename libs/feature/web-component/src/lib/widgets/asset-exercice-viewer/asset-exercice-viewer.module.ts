import { NgModule, Type } from '@angular/core';
import { IDynamicModule } from '@cisstech/nge/services';

import { BaseModule } from '../../shared/components/base/base.module';
import { AssetExerciceViewerComponent } from './asset-exercice-viewer.component';

@NgModule({
    declarations: [AssetExerciceViewerComponent],
    imports: [
        BaseModule
    ],
    exports: [AssetExerciceViewerComponent],
})
export class AssetExerciceViewerModule implements IDynamicModule {
    component: Type<any> = AssetExerciceViewerComponent;
}
