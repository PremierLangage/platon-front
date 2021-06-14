import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { SettingsComponent } from './settings.component';

const routes: Routes = [
    {
        path: '',
        component: SettingsComponent,
        children: [
            {
                path: 'general', loadChildren: () => import('./general/general.module').then(m => m.GeneralModule)
            },
            {
                path: 'members', loadChildren: () => import('./members/members.module').then(m => m.MembersModule)
            },
            { path: '**', pathMatch: 'full', redirectTo: 'general' }
        ],
    },
    { path: '**', pathMatch: 'full', redirectTo: 'general' }
];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SettingsRoutingModule { }
