import { NgModule, CUSTOM_ELEMENTS_SCHEMA, Type } from '@angular/core';
import { DraftsComponent } from './drafts.component';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', component: DraftsComponent }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        DraftsComponent,
    ],
    exports: [
        DraftsComponent,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DraftsModule {}
