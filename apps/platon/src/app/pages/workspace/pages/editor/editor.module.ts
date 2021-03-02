import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';

// import { FeatureIdeModule } from '@platon/feature/ide';
// import { FeatureIdeSearchModule } from '@platon/feature/ide/search';
// import { FeatureIdeExplorerModule } from '@platon/feature/ide/explorer';
// import { FeatureIdeSettingsModule } from '@platon/feature/ide/settings';
// import { FeatureIdeProblemsModule } from '@platon/feature/ide/problems';
// import { FeatureIdeNotificationsModule } from '@platon/feature/ide/notifications';

import { SharedModule } from '../../../../shared/shared.module';
import { EditorComponent } from './editor.component';
import { EditorRoutingModule } from './editor-routing.module';


@NgModule({
    declarations: [EditorComponent],
    imports: [
        CommonModule,
        MatButtonModule,
        EditorRoutingModule,

        SharedModule,

        // FeatureIdeModule,
        // FeatureIdeSearchModule,
        // FeatureIdeExplorerModule,
        // FeatureIdeSettingsModule,
        // FeatureIdeProblemsModule,
        // FeatureIdeNotificationsModule,
    ],
    providers: [],
})
export class EditorModule {}
