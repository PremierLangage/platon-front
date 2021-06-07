import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CreateModelComponent } from './create-model.component';

const routes: Routes = [
    { path: '', component: CreateModelComponent }
];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CreateModelRoutingModule {}
