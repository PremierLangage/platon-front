import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// required by Angular Material https://www.npmjs.com/package/@angular/material
import 'hammerjs';

import { MaterialImports } from './material/material';
import { NgeDocProviders } from './nge-doc/nge-doc';
import { NgeMonacoImports } from './nge-monaco/nge-monaco';
import { NgeMarkdownProviders } from './nge-markdown/nge-markdown';

import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';

import { FormlyModule } from '@ngx-formly/core';
import { ObjectTypeComponent } from './formly/object.type';
import { ArrayTypeComponent } from './formly/array.type';

/**
 * 3rd party librairies integrations in the project.
 */
@NgModule({
    declarations: [
        ObjectTypeComponent,
        ArrayTypeComponent
    ],
    imports: [
        CommonModule,
        ...MaterialImports,
        ...NgeMonacoImports,

        NzIconModule,
        NzButtonModule,

        FormlyModule.forRoot({
            types: [
                { name: 'string', extends: 'input' },
                {
                    name: 'number',
                    extends: 'input',
                    defaultOptions: {
                        templateOptions: {
                            type: 'number',
                        },
                    },
                },
                {
                    name: 'integer',
                    extends: 'input',
                    defaultOptions: {
                        templateOptions: {
                            type: 'number',
                        },
                    },
                },
                { name: 'boolean', extends: 'checkbox' },
                { name: 'enum', extends: 'select' },
                { name: 'object', component: ObjectTypeComponent },
                { name: 'array', component: ArrayTypeComponent }
            ]
        })
    ],
    exports: [
    ],
    providers: [
        ...NgeDocProviders,
        ...NgeMarkdownProviders,
    ]
})
export class SharedVendorsModule { }
