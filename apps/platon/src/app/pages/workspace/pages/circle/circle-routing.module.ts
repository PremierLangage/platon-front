import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { CircleComponent } from './circle.component';
import { CircleForumComponent } from './circle-forum/circle-forum.component';
import { CircleSettingsComponent } from './circle-settings/circle-settings.component';
import { CircleHomeComponent } from './circle-home/circle-home.component';
import { CircleDocComponent } from './circle-doc/circle-doc.component';


const routes: Routes = [
    {
        path: ':id',
        component: CircleComponent,
        children: [
            { path: '', component: CircleHomeComponent },
            { path: 'doc', component: CircleDocComponent },
            { path: 'forum', component: CircleForumComponent },
            { path: 'settings', component: CircleSettingsComponent },
        ]
    },
];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CircleRoutingModule {}
