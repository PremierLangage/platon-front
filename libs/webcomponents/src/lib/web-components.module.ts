import { CommonModule } from '@angular/common';
import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { WebComponentLoaderComponent } from './web-components-loader.component';

@NgModule({
    declarations: [WebComponentLoaderComponent],
    imports: [CommonModule],
    exports: [WebComponentLoaderComponent],
})
export class WebComponentsModule {
    constructor(
        private readonly injector: Injector
    ) {
        customElements.define('wc-loader', createCustomElement(
            WebComponentLoaderComponent, { injector: this.injector }
        ));
    }
}
