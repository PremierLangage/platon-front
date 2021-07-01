import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthGuard } from '@platon/core/auth';

const routes: Routes = [
    {
        path: 'error',
        loadChildren: () => import(
            /* webpackChunkName: "error" */
            './shared/error/error.module'
        ).then(m => m.AppSharedErrorModule)
    },

    // PUBLIC PAGES
    {
        path: 'login',
        loadChildren: () => import(
            /* webpackChunkName: "login" */
            './pages/login/login.module'
        ).then(m => m.LoginModule)
    },
    {
        path: 'doc',
        loadChildren: () => import(
            /* webpackChunkName: "doc" */
            './pages/doc/doc.module'
        ).then(m => m.DocModule)
    },

    // PROTECTED ADMIN PAGES
    {
        path: 'admin',
        canActivate: [AuthGuard],
        data: { roles: ['admin'] },
        loadChildren: () => import(
            /* webpackChunkName: "admin" */
            './pages/admin/admin.module'
        ).then(m => m.AdminModule)
    },

    // PROTECTED PUBLIC PAGES
    {
        path: 'dashboard',
        canActivate: [AuthGuard],
        data: { roles: ['all'] },
        loadChildren: () => import(
            /* webpackChunkName: "dashboard" */
            './pages/dashboard/dashboard.module'
        ).then(m => m.DashboardModule)
    },
    {
        path: 'forum',
        canActivate: [AuthGuard],
        data: { roles: ['all'] },
        loadChildren: () => import(
            /* webpackChunkName: "forum" */
            './pages/forum/forum.module'
        ).then(m => m.ForumModule)
    },
    {
        path: 'profile',
        canActivate: [AuthGuard],
        data: { roles: ['all'] },
        loadChildren: () => import(
            /* webpackChunkName: "profile" */
            './pages/profile/profile.module'
        ).then(m => m.ProfileModule)
    },
    {
        path: 'course-list',
        canActivate: [AuthGuard],
        data: { roles: ['all'] },
        loadChildren: () => import(
            /* webpackChunkName: "course-list" */
            './pages/course-list/course-list.module'
        ).then(m => m.CourseListModule)
    },
    {
        path: 'course',
        canActivate: [AuthGuard],
        data: { roles: ['all'] },
        loadChildren: () => import(
            /* webpackChunkName: "course" */
            './pages/course/course.module'
        ).then(m => m.CourseModule)
    },
    {
        path: 'exercise',
        canActivate: [AuthGuard],
        data: { roles: ['all'] },
        loadChildren: () => import(
            /* webpackChunkName: "exercise" */
            './pages/exercise/exercise.module'
        ).then(m => m.ExerciseModule)
    },
    {
        path: 'student-dashboard',
        canActivate: [AuthGuard],
        data: { roles: ['all'] },
        loadChildren: () => import(
            /* webpackChunkName: "student-dashboard" */
            './pages/student-dashboard/student-dashboard.module'
        ).then(m => m.StudentDashboardModule)
    },
    {
        path: 'group-dashboard',
        canActivate: [AuthGuard],
        data: { roles: ['all'] },
        loadChildren: () => import(
            /* webpackChunkName: "group-dashboard" */
            './pages/group-dashboard/group-dashboard.module'
        ).then(m => m.GroupDashboardModule)
    },
    {
        path: 'activity',
        canActivate: [AuthGuard],
        data: { roles: ['all'] },
        loadChildren: () => import(
            /* webpackChunkName: "activity" */
            './pages/activity/activity.module'
        ).then(m => m.ActivityModule)
    },

    // PROTECTED EDITOR PAGES

    {
        path: 'circle',
        canActivate: [AuthGuard],
        data: { roles: ['editor'] },
        loadChildren: () => import(
            /* webpackChunkName: "circle" */
            './pages/circle/circle.module'
        ).then(m => m.CircleModule)
    },
    {
        path: 'resource',
        canActivate: [AuthGuard],
        data: { roles: ['editor'] },
        loadChildren: () => import(
            /* webpackChunkName: "resource" */
            './pages/resource/resource.module'
        ).then(m => m.ResourceModule)
    },
    {
        path: 'create-activity',
        canActivate: [AuthGuard],
        data: { roles: ['editor'] },
        loadChildren: () => import(
            /* webpackChunkName: "create-activity" */
            './pages/create-activity/create-activity.module'
        ).then(m => m.CreateActivityModule)
    },
    {
        path: 'create-circle',
        canActivate: [AuthGuard],
        data: { roles: ['editor'] },
        loadChildren: () => import(
            /* webpackChunkName: "create-circle" */
            './pages/create-circle/create-circle.module'
        ).then(m => m.CreateCircleModule)
    },
    {
        path: 'create-exercise',
        canActivate: [AuthGuard],
        data: { roles: ['editor'] },
        loadChildren: () => import(
            /* webpackChunkName: "create-exercise" */
            './pages/create-exercise/create-exercise.module'
        ).then(m => m.CreateExerciseModule)
    },

    {
        path: 'workspace',
        canActivate: [AuthGuard],
        data: { roles: ['editor'] },
        loadChildren: () => import(
            /* webpackChunkName: "workspace" */
            './pages/workspace/workspace.module'
        ).then(m => m.WorkspaceModule)
    },
    { path: '**', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes, {
            enableTracing: false,
            preloadingStrategy: PreloadAllModules
        }),
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}
