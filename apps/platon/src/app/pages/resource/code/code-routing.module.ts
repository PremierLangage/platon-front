import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { NgeMonacoModule } from "@cisstech/nge/monaco";
import { NzButtonModule } from "ng-zorro-antd/button";
import { NzDropDownModule } from "ng-zorro-antd/dropdown";
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from "ng-zorro-antd/icon";
import { NzListModule } from "ng-zorro-antd/list";
import { NzSkeletonModule } from "ng-zorro-antd/skeleton";
import { NzUploadModule } from 'ng-zorro-antd/upload';

import { AppSharedErrorModule } from "../../../shared/error/error.module";

import { CodeComponent } from "./code.component";
import { CodeEditComponent } from "./edit/code-edit.component";
import { CodeNewComponent } from "./new/code-new.component";
import { CodeTreeComponent } from "./tree/code-tree.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CodeUploadComponent } from "./upload/code-upload.component";


const routes: Routes = [
    {
        path: '',
        component: CodeComponent,
        children: [
            {
                path: 'tree',
                children: [{ path: '**', component: CodeTreeComponent }],
            },
            {
                path: 'edit',
                children: [{ path: '**', component: CodeEditComponent }]
            },
            {
                path: 'new',
                children: [{ path: '**', component: CodeNewComponent }]
            },
            {
                path: 'upload',
                children: [{ path: '**', component: CodeUploadComponent }]
            },
            { path: '**', redirectTo: 'tree', pathMatch: 'full' }
        ]
    },
];

@NgModule({
    declarations: [
        CodeTreeComponent,
        CodeEditComponent,
        CodeNewComponent,
        CodeUploadComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,

        NzListModule,
        NzSkeletonModule,
        NzIconModule,
        NzButtonModule,
        NzDropDownModule,
        NzInputModule,
        NzUploadModule,

        HttpClientModule,
        NgeMonacoModule.forRoot({}),

        AppSharedErrorModule,
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule],
})
export class CodeRoutingModule { }
