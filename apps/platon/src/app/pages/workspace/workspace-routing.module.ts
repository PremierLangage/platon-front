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
                path: 'activity',
                loadChildren: () => import(
                    /* webpackChunkName: "workspace-activity" */
                    './pages/activity/activity.module'
                ).then(m => m.ActivityModule)
            },
            {
                path: 'exercise',
                loadChildren: () => import(
                    /* webpackChunkName: "workspace-exercise" */
                    './pages/exercise/exercise.module'
                ).then(m => m.ExerciseModule)
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
