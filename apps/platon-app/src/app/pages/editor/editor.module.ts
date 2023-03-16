import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgeIdeModule } from '@cisstech/nge-ide';
import { NgeIdeExplorerModule } from '@cisstech/nge-ide/explorer';
import { NgeIdeSearchModule } from '@cisstech/nge-ide/search';
import { NgeIdeSettingsModule } from '@cisstech/nge-ide/settings';

import { NgeIdeProblemsModule } from '@cisstech/nge-ide/problems';
import { NgeIdeNotificationsModule } from '@cisstech/nge-ide/notifications';

import { EditorComponent } from './editor.component';
import { RouterModule } from '@angular/router';
import { EditorResolver } from './editor.resolver';

@NgModule({
    imports: [
        CommonModule,

        NgeIdeModule,
        NgeIdeExplorerModule,
        NgeIdeSearchModule,
        NgeIdeSettingsModule,

        NgeIdeProblemsModule,
        NgeIdeNotificationsModule,

        RouterModule.forChild([
            {
                path: 'resource/:id',
                resolve: { tree: EditorResolver },
                data: { type: 'resource' },
                component: EditorComponent
            },
            {
                path: 'circle/:id',
                resolve: { tree: EditorResolver },
                data: { type: 'circle' },
                component: EditorComponent
            }
        ]),

    ],
    declarations: [EditorComponent],
    providers: [EditorResolver]
})
export class EditorModule {}
