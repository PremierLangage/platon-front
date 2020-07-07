import { CommonModule } from '@angular/common';
import { Injector, ModuleWithProviders, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { LoaderComponent } from './core/loader/loader.component';
import { WEB_COMPONENTS_PROVIDERS } from './web-components-registry';
import { DocPropsComponent } from './core/doc-props/doc-props.component';
import { DocHeaderComponent } from './core/doc-header/doc-header.component';

@NgModule({
    declarations: [
        LoaderComponent,
        DocHeaderComponent,
        DocPropsComponent,
    ],
    imports: [
        CommonModule,
    ],
})
export class FeaturesWebComponentsModule {
    constructor(
        private readonly injector: Injector
    ) {
        customElements.define('wc-loader', createCustomElement(
            LoaderComponent, { injector: this.injector }
        ));
        customElements.define('wc-doc-header', createCustomElement(
            DocHeaderComponent, { injector: this.injector }
        ));
        customElements.define('wc-doc-props', createCustomElement(
            DocPropsComponent, { injector: this.injector }
        ));
    }

    static forRoot(): ModuleWithProviders<FeaturesWebComponentsModule> {
        return {
            ngModule: FeaturesWebComponentsModule,
            providers: WEB_COMPONENTS_PROVIDERS
        };
    }
}
