import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssetComponent } from './asset.component';

const routes: Routes = [
    {
        path: ':id',
        component: AssetComponent,
        children: [
            {
                path: 'runner',
                loadChildren: () =>
                    import('./runner/runner.module').then(
                        (m) => m.RunnerModule
                    ),
            },
            {
                path: '**',
                redirectTo: 'runner',
                pathMatch: 'full',
            },
        ],
    },
];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AssetRoutingModule {}
