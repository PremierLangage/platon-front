import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonToggleModule } from '@angular/material/button-toggle';


import { NgeMarkdownModule } from 'nge-markdown';
import { SharedUiDialogModule } from '@platon/shared/ui';


import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import { FormDemoComponent } from './form-demo/form-demo.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,

    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatButtonToggleModule,
    MatProgressSpinnerModule,

    NgeMarkdownModule,
    SharedUiDialogModule,

    LoginRoutingModule,
  ],
  declarations: [LoginComponent, FormDemoComponent]
})
export class LoginModule { }
