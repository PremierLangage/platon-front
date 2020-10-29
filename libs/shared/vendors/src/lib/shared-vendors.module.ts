import { NgModule } from '@angular/core';

// required by Angular Material https://www.npmjs.com/package/@angular/material
import 'hammerjs';

import { MaterialImports } from './material/material';
import { NgeDocProviders } from './nge-doc/nge-doc';
import { NgeMonacoImports } from './nge-monaco/nge-monaco';
import { NgeMarkdownProviders } from './nge-markdown/nge-markdown';

/**
 * 3rd party librairies integrations in the project.
 */
@NgModule({
    imports: [
        ...MaterialImports,
        ...NgeMonacoImports,
    ],
    exports: [],
    providers: [
        ...NgeDocProviders,
        ...NgeMarkdownProviders,
    ]
})
export class SharedVendorsModule {}
