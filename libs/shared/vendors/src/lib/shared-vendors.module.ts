import { NgModule, SecurityContext } from '@angular/core';

// required by Angular Material https://www.npmjs.com/package/@angular/material
import 'hammerjs';
import { NgeMarkdownProviders } from './nge-markdown/nge-markdown';
import { NgeMonacoImport } from './nge-monaco/nge-monaco';


/**
 * 3rd party librairies integrations in the project.
 */
@NgModule({
    imports: [
        NgeMonacoImport
    ],
    providers: [
        ...NgeMarkdownProviders
    ]
})
export class SharedVendorsModule {}
