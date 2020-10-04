import { NgModule, Type } from '@angular/core';
import { NgeMarkdownModule } from 'nge-markdown';
import { SharedModule } from '../../shared/shared.module';
import { MatchListComponent } from './match-list.component';


@NgModule({
    declarations: [MatchListComponent],
    imports: [
        SharedModule,
        NgeMarkdownModule,
    ],
    exports: [MatchListComponent],
})
export class MatchListModule {
    customElementComponent: Type<any> = MatchListComponent;
}
