import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CreateAssetComponent } from './create-asset.component';

const routes: Routes = [{ path: '', component: CreateAssetComponent }];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CreateAssetRoutingModule {}
