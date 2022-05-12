import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssetComponent } from './asset.component';

const routes: Routes = [
    {
        path: '',
        component: AssetComponent,
        children: [
            {
                path: 'overview',
                loadChildren: () =>
                    import('./overview/overview.module').then(
                        (m) => m.OverviewModule
                    ),
            },
            { path: '**', redirectTo: 'overview', pathMatch: 'full' },
        ],
    },
    { path: '**', redirectTo: 'overview', pathMatch: 'full' },
];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AssetRoutingModule {}
