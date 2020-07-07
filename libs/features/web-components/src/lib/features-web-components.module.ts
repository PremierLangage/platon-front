import { CommonModule } from '@angular/common';
import { Injector, ModuleWithProviders, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { WebComponentLoaderComponent } from './core/loader/web-components-loader.component';
import { WEB_COMPONENTS_PROVIDERS } from './web-components-registry';

@NgModule({
    declarations: [WebComponentLoaderComponent],
    imports: [CommonModule],
    exports: [WebComponentLoaderComponent],
})
export class FeaturesWebComponentsModule {
    constructor(
        private readonly injector: Injector
    ) {
        customElements.define('wc-loader', createCustomElement(
            WebComponentLoaderComponent, { injector: this.injector }
        ));
    }

    static forRoot(): ModuleWithProviders<FeaturesWebComponentsModule> {
        return {
            ngModule: FeaturesWebComponentsModule,
            providers: WEB_COMPONENTS_PROVIDERS
        };
    }
}
