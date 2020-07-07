// ANGULAR
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// LIBS
import { MarkdownModule } from 'ngx-markdown';

import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatExpansionModule } from '@angular/material/expansion';


// MODULE
import { DocsComponent } from './docs.component';
import { ContentComponent } from './content/content.component';
import { SidenavComponent } from './sidenav/sidenav.component';

@NgModule({
    declarations: [
        DocsComponent,
        ContentComponent,
        SidenavComponent,
    ],
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: '',
                component: DocsComponent,
                children: [
                    { path: '**', pathMatch: 'full', component: ContentComponent }
                ],
            }
        ]),

        MarkdownModule.forChild(),

        MatListModule,
        MatIconModule,
        MatButtonModule,
        MatToolbarModule,
        MatSidenavModule,
        MatExpansionModule,
    ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class FeaturesDocsModule {}
