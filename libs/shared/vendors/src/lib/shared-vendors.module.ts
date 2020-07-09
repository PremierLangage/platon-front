import { NgModule, SecurityContext } from '@angular/core';

// required by Angular Material https://www.npmjs.com/package/@angular/material
import 'hammerjs';

// NgxMarkdown https://www.npmjs.com/package/ngx-markdown
import { MarkdownModule, MarkedOptions } from 'ngx-markdown';
import { markedOptionsFactory } from './marked-options';

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
    ],
    exports: [
        MarkdownModule,
    ]
})
export class SharedVendorsModule {}
