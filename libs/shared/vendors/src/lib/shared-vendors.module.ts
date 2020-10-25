import { NgModule, SecurityContext } from '@angular/core';

// required by Angular Material https://www.npmjs.com/package/@angular/material
import 'hammerjs';

import { NgeMarkdownProviders } from './nge-markdown/nge-markdown';
import { NgeMonaco } from './nge-monaco/nge-monaco';
import { NgeDocRenderers } from './nge-doc/nge-doc';
import { Material } from './material/material';


/**
 * 3rd party librairies integrations in the project.
 */
@NgModule({
    imports: [
        NgeMonaco,
        ...Material
    ],
    exports: [

    ],
    providers: [
        ...NgeMarkdownProviders,
        NgeDocRenderers,
    ]
})
export class SharedVendorsModule {}
