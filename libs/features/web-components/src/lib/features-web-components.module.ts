// ANGULAR
import { CommonModule } from '@angular/common';
import { Injector, ModuleWithProviders, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// LIBS
import { MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NgJsonEditorModule } from 'ang-jsoneditor'

// MODULE
import { LoaderComponent } from './core/loader/loader.component';
import { DocPropsComponent } from './core/doc-props/doc-props.component';
import { DocHeaderComponent } from './core/doc-header/doc-header.component';
import { DocShowcaseComponent } from './core/doc-showcase/doc-showcase.component';

import { WEB_COMPONENTS_PROVIDERS } from './web-components-registry';

@NgModule({
    declarations: [
        LoaderComponent,
        DocHeaderComponent,
        DocShowcaseComponent,
        DocPropsComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatIconModule,
        MatButtonModule,
        NgJsonEditorModule,
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
        customElements.define('wc-doc-showcase', createCustomElement(
            DocShowcaseComponent, { injector: this.injector }
        ));
    }

    static forRoot(): ModuleWithProviders<FeaturesWebComponentsModule> {
        return {
            ngModule: FeaturesWebComponentsModule,
            providers: WEB_COMPONENTS_PROVIDERS
        };
    }
}
