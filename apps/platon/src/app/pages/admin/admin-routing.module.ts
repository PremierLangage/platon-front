import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';

const routes: Routes = [
    { path: '', component: AdminComponent },
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
    ],
    exports: [RouterModule]
})
export class AdminRoutingModule {}
