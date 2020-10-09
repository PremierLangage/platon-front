import { NgModule, SecurityContext } from '@angular/core';

// required by Angular Material https://www.npmjs.com/package/@angular/material
import 'hammerjs';
import { NgeMarkdownProviders } from './nge-markdown/nge-markdown';
import { NgeMonacoImport } from './nge-monaco/nge-monaco';
import { NGE_DOC_RENDERERS } from 'nge-doc';
import { NgeDocRenderers } from './nge-doc/nge-doc';


/**
 * 3rd party librairies integrations in the project.
 */
@NgModule({
    imports: [
        NgeMonacoImport
    ],
    providers: [
        ...NgeMarkdownProviders,
        NgeDocRenderers,
    ]
})
export class SharedVendorsModule {}
