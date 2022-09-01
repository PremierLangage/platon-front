import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AdminActivityComponent } from "./admin-activity.component";


@NgModule({
    declarations: [AdminActivityComponent],
    imports: [
        CommonModule,

        RouterModule.forChild([
            {
                path: '',
                component: AdminActivityComponent
            }
        ])
    ]
})
export class AdminActivityModule { }
