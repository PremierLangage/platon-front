import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RunnerComponent } from './runner.component';

const routes: Routes = [
    {
        path: '',
        component: RunnerComponent,
    },
];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class RunnerRoutingModule {}
