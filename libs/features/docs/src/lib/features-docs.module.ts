import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DocsPlayerComponent } from './docs-player/docs-player.component';

@NgModule({
    declarations: [
        DocsPlayerComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild([
            { path: '**', pathMatch: 'full', component: DocsPlayerComponent }
        ])
    ],
})
export class FeaturesDocsModule {}
