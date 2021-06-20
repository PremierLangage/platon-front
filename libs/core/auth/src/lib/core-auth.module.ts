import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';

import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzButtonModule } from 'ng-zorro-antd/button';

import { SharedUiListModule } from '@platon/shared/ui/list';
import { SharedUiSearchModule } from '@platon/shared/ui/search';

import { AvatarComponent } from './components/avatar/avatar.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { SearchModalComponent } from './components/search-modal/search-modal.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,

        MatButtonModule,
        MatTooltipModule,

        NzIconModule,
        NzBadgeModule,
        NzModalModule,
        NzAvatarModule,
        NzButtonModule,

        SharedUiListModule,
        SharedUiSearchModule,
    ],
    exports: [
        AvatarComponent,
        SearchBarComponent,
        SearchModalComponent
    ],
    declarations: [
        AvatarComponent,
        SearchBarComponent,
        SearchModalComponent
    ],
})
export class CoreAuthModule { }
