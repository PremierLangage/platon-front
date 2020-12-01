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
                path: 'circles',
                loadChildren: () => import(
                    /* webpackChunkName: "workspace-circles" */
                    './pages/circles/circles.module'
                ).then(m => m.CirclesModule)
            },
            {
                path: 'packages',
                loadChildren: () => import(
                    /* webpackChunkName: "workspace-packages" */
                    './pages/packages/packages.module'
                ).then(m => m.PackagesModule)
            },
            { path: '**', redirectTo: 'circles', pathMatch: 'full' }
        ]
    },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class WorkspaceRoutingModule {}
