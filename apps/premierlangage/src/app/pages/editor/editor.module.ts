import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgeIdeModule } from '@mcisse/nge-ide';
import { NgeIdeExplorerModule } from '@mcisse/nge-ide/explorer';
import { NgeIdeSearchModule } from '@mcisse/nge-ide/search';
import { NgeIdeSettingsModule } from '@mcisse/nge-ide/settings';

import { NgeIdeProblemsModule } from '@mcisse/nge-ide/problems';
import { NgeIdeNotificationsModule } from '@mcisse/nge-ide/notifications';


import { EditorComponent } from './editor.component';
import { RouterModule } from '@angular/router';

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
            { path: '', component: EditorComponent }
        ])
    ],
    declarations: [EditorComponent]
})
export class EditorModule { }
