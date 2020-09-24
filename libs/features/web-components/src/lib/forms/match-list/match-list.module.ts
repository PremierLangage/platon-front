import { NgModule, Type } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

import { MatchListComponent } from './match-list.component';

@NgModule({
    declarations: [MatchListComponent],
    imports: [
        SharedModule
    ],
    exports: [MatchListComponent],
})
export class MatchListModule {
    customElementComponent: Type<any> = MatchListComponent;
}
