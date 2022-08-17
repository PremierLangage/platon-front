import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AppSharedLayoutModule } from "../../shared/layout";

import { AssetComponent } from "./asset.component";


@NgModule({
    declarations: [
        AssetComponent,
    ],
    imports: [
        CommonModule,

        AppSharedLayoutModule,

        RouterModule.forChild([
            {
                path: '',
                component: AssetComponent,
                children: [
                    {
                        path: 'cours',
                        loadChildren: () => import(
                            './cours/asset-cours.module'
                        ).then(m => m.AssetCoursModule)
                    },
                    { path: '**', redirectTo: '/dashboard', pathMatch: 'full' }
                ]
            },
        ])
    ]
})
export class AssetModule { }
