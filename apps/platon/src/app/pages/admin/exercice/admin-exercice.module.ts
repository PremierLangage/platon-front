import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AdminExerciceComponent } from "./admin-exercice.component";

@NgModule({
    declarations: [AdminExerciceComponent],
    imports: [
        CommonModule,

        RouterModule.forChild([
            {
                path: '',
                component: AdminExerciceComponent
            }
        ])
    ]
})
export class AdminExerciceModule { }
