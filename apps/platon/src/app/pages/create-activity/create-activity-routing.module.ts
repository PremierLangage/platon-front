import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CreateActivityComponent } from './create-activity.component';

const routes: Routes = [
    { path: '', component: CreateActivityComponent }
];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CreateActivityRoutingModule {}
