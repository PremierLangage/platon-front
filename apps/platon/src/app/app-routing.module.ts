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
        path: 'admin-panel',
        canActivate: [AuthGuard],
        loadChildren: () => import(
            /* webpackChunkName: "admin-panel" */
            './pages/admin-panel/admin-panel.module'
        ).then(m => m.AdminPanelModule)
    },
    {
        path: 'workspace',
        canActivate: [AuthGuard],
        loadChildren: () => import(
            /* webpackChunkName: "workspace" */
            './pages/workspace/workspace.module'
        ).then(m => m.WorkspaceModule)
    },
    { path: '**', redirectTo: 'login', pathMatch: 'full' }
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
