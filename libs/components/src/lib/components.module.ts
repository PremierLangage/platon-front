import { CommonModule } from '@angular/common';
import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { ComponentsLoaderComponent } from './components-loader.component';

@NgModule({
    declarations: [ComponentsLoaderComponent],
    imports: [CommonModule],
    exports: [ComponentsLoaderComponent],
})
export class ComponentsModule {
    constructor(
        private readonly injector: Injector
    ) {
        customElements.define('platon-components-loader', createCustomElement(
            ComponentsLoaderComponent, { injector: this.injector }
        ));
    }
}
