import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';

import { SharedUiListModule } from '@platon/shared/ui';

import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,

        MatIconModule,
        MatButtonModule,
        MatTooltipModule,


        NzTagModule,
        NzEmptyModule,
        NzBadgeModule,
        NzAvatarModule,

        SharedUiListModule,
    ],
    exports: [
    ],
    declarations: [
    ],
})
export class FeatureWorkspaceModule {}
