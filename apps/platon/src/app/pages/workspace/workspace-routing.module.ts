import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { WorkspaceComponent } from './workspace.component';

const routes: Routes = [
    {
        path: '',
        component: WorkspaceComponent,
        children: [
            {
                path: 'search',
                loadChildren: () => import(
                    /* webpackChunkName: "workspace-search" */
                    './pages/search/search.module'
                ).then(m => m.SearchModule)
            },

            {
                path: 'activities',
                loadChildren: () => import(
                    /* webpackChunkName: "workspace-activities" */
                    './pages/activities/activities.module'
                ).then(m => m.ActivitiesModule)
            },
            {
                path: 'exercises',
                loadChildren: () => import(
                    /* webpackChunkName: "workspace-exercises" */
                    './pages/exercises/exercises.module'
                ).then(m => m.ExercisesModule)
            },
            {
                path: 'circle',
                loadChildren: () => import(
                    /* webpackChunkName: "workspace-circle" */
                    './pages/circle/circle.module'
                ).then(m => m.CircleModule)
            },

            { path: '**', redirectTo: 'search', pathMatch: 'full' }
        ]
    },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class WorkspaceRoutingModule {}
