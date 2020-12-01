import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { CirclesComponent } from './circles.component';
import { CircleDetailComponent } from './circle-detail/circle-detail.component';

const routes: Routes = [
    { path: '', component: CirclesComponent },
    {
        path: ':id',
        component: CircleDetailComponent,
        children: [
            { path: 'forum', component: CircleDetailComponent },
            { path: 'settings', component: CircleDetailComponent },
            { path: 'exercises', component: CircleDetailComponent },
            { path: 'activities', component: CircleDetailComponent },
            { path: 'contributors', component: CircleDetailComponent },
        ]
    }
];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CirclesRoutingModule {}
