import { NgModule, SecurityContext } from '@angular/core';

// required by Angular Material https://www.npmjs.com/package/@angular/material
import 'hammerjs';

//  https://www.npmjs.com/package/ngx-markdown
import { MarkdownModule, MarkedOptions } from 'ngx-markdown';
import { markedOptionsFactory } from './marked-options';


// https://www.npmjs.com/package/ngx-monaco-editor
import { MonacoEditorModule } from 'ngx-monaco-editor';
import { MONACO_CONFIG } from './monaco/monaco-config';
import { VendorsMonacoModule } from './monaco';

/**
 * 3rd party librairies integrations in the project.
 */
@NgModule({
    imports: [
        MarkdownModule.forRoot({
            markedOptions: {
                provide: MarkedOptions,
                useFactory: markedOptionsFactory
            },
            sanitize: SecurityContext.NONE
        }),
        MonacoEditorModule.forRoot(MONACO_CONFIG),
        VendorsMonacoModule.forRoot(),
    ],
    exports: [
        MarkdownModule,
    ]
})
export class SharedVendorsModule {}
