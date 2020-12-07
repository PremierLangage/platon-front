import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';

import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzButtonModule } from 'ng-zorro-antd/button';

import { SharedUiListModule, SharedUiSearchBarModule } from '@platon/shared/ui';

import { AvatarComponent } from './components/avatar/avatar.component';
import { SearchModalComponent } from './components/search-modal/search-modal.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,

        MatButtonModule,
        MatTooltipModule,

        NzIconModule,
        NzBadgeModule,
        NzModalModule,
        NzAvatarModule,
        NzButtonModule,

        SharedUiListModule,
        SharedUiSearchBarModule,
    ],
    exports: [AvatarComponent, SearchModalComponent],
    declarations: [AvatarComponent, SearchModalComponent],
})
export class CoreAuthModule {}
