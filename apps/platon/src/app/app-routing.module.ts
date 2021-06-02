import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthGuard } from '@platon/core/auth';

const routes: Routes = [
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

    // PROTECTED PAGES
    {
        path: 'dashboard',
        canActivate: [AuthGuard],
        loadChildren: () => import(
            /* webpackChunkName: "doc" */
            './pages/dashboard/dashboard.module'
        ).then(m => m.DashboardModule)
    },
    {
        path: 'forum',
        canActivate: [AuthGuard],
        loadChildren: () => import(
            /* webpackChunkName: "forum" */
            './pages/forum/forum.module'
        ).then(m => m.ForumModule)
    },
    {
        path: 'profile',
        canActivate: [AuthGuard],
        loadChildren: () => import(
            /* webpackChunkName: "profile" */
            './pages/profile/profile.module'
        ).then(m => m.ProfileModule)
    },
    {
        path: 'admin',
        canActivate: [AuthGuard],
        loadChildren: () => import(
            /* webpackChunkName: "admin" */
            './pages/admin/admin.module'
        ).then(m => m.AdminModule)
    },
    {
        path: 'circle',
        canActivate: [AuthGuard],
        loadChildren: () => import(
            /* webpackChunkName: "circle" */
            './pages/circle/circle.module'
        ).then(m => m.CircleModule)
    },
    {
        path: 'resource',
        canActivate: [AuthGuard],
        loadChildren: () => import(
            /* webpackChunkName: "resource" */
            './pages/resource/resource.module'
        ).then(m => m.ResourceModule)
    },
    {
        path: 'workspace',
        canActivate: [AuthGuard],
        loadChildren: () => import(
            /* webpackChunkName: "workspace" */
            './pages/workspace/workspace.module'
        ).then(m => m.WorkspaceModule)
    },
    { path: '**', redirectTo: '/login', pathMatch: 'full' }
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
