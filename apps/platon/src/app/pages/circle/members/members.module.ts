import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MembersComponent } from './members.component';

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild([{ path: '', component: MembersComponent }])
  ],
  declarations: [MembersComponent]
})
export class MembersModule { }
