import { NgModule } from '@angular/core';
import { IconGrPipe } from './icongr.pipe';
import { SafePipe } from './safe.pipe';

@NgModule({
    exports: [SafePipe, IconGrPipe],
    declarations: [SafePipe, IconGrPipe],
})
export class SharedUtilsPipesModule { }
