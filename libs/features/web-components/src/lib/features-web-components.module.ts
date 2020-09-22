// ANGULAR
import { ModuleWithProviders, NgModule } from '@angular/core';

// MODULE
import { WEB_COMPONENTS_REGISTRY } from './web-components-registry';
import { WebComponentsDetectorDirective } from './web-components-detector';

@NgModule({
    declarations: [WebComponentsDetectorDirective],
    exports: [WebComponentsDetectorDirective],
})
export class FeaturesWebComponentsModule {
    static forRoot(): ModuleWithProviders<FeaturesWebComponentsModule> {
        return {
            ngModule: FeaturesWebComponentsModule,
            providers: WEB_COMPONENTS_REGISTRY
        };
    }
}
