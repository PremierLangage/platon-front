import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PortalModule } from '@angular/cdk/portal';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatFormFieldModule } from '@angular/material/form-field';

import { SharedUiIconModule } from '@platon/shared/ui';

import { ViewPipe } from './pipe/view.pipe';
import { CommandsComponent } from './components/commands/commands.components';
import { SearchInputComponent } from './components/search-input/search-input.components';


@NgModule({
    declarations: [
        ViewPipe,
        CommandsComponent,
        SearchInputComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,

        PortalModule,
        MatTooltipModule,
        MatFormFieldModule,

        SharedUiIconModule
    ],
    exports: [
        ViewPipe,
        CommandsComponent,
        SearchInputComponent,
    ],
})
export class EditorSharedModule { }
