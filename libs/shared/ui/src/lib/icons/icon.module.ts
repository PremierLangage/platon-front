import { PortalModule } from '@angular/cdk/portal';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { CodIconComponent } from './codicon/codicon.component';
import { FaIconComponent } from './fa-icon/fa-icon.component';
import { FileIconPipe } from './file-icon.pipe';
import { FileIconComponent } from './file-icon/file-icon.component';
import { IconComponent } from './icon.component';
import { IconPipe } from './icon.pipe';
import { ImgIconComponent } from './img-icon/img-icon.component';

const DECLARATIONS = [
    IconComponent,
    FaIconComponent,
    FileIconComponent,
    ImgIconComponent,
    CodIconComponent,

    IconPipe,
    FileIconPipe,
];

@NgModule({
  declarations: [
    ...DECLARATIONS,
  ],
  imports: [
      MatBadgeModule,
      CommonModule,
      PortalModule,
  ],
  exports: [
    ...DECLARATIONS,
  ],
})
export class SharedUiIconModule { }
