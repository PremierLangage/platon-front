import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebComponentDocs } from '@platon/feature/web-component';
import { DocComponent } from './doc.component';


const routes: Routes = [
    { path: '', component: DocComponent },
    {
        path: '**',
        loadChildren: () => import('@mcisse/nge/doc').then(m => m.NgeDocModule),
        data: [
            WebComponentDocs,
        ],
    },
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
    ],
    exports: [RouterModule]
})
export class DocRoutingModule { }
