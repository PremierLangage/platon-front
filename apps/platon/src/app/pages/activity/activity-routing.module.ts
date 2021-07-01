import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ActivityComponent } from './activity.component';

const routes: Routes = [
    {
        path: '',
        component: ActivityComponent,
        children: [
            {
                path: 'exercise',
                loadChildren: () => import(
                    /* webpackChunkName: "activity-exercise" */
                    '../exercise/exercise.module'
                ).then(m => m.ExerciseModule)
            },
            {
                path: 'student-dashboard',
                loadChildren: () => import(
                    /* webpackChunkName: "activity-student-dashboard" */
                    '../student-dashboard/student-dashboard.module'
                ).then(m => m.StudentDashboardModule)
            },
            {
                path: 'group-dashboard',
                loadChildren: () => import(
                    /* webpackChunkName: "activity-group-dashboard" */
                    '../group-dashboard/group-dashboard.module'
                ).then(m => m.GroupDashboardModule)
            },
            { path: '**', redirectTo: 'exercise', pathMatch: 'full' }
        ]
    },
    { path: '**', redirectTo: 'exercise', pathMatch: 'full' }
];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ActivityRoutingModule { }
