import { Component, EventEmitter, Input, Output, TemplateRef, ViewChild } from '@angular/core';
import { AuthUser } from '@platon/core/auth';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
    @Input() user?: AuthUser;
    @Input() showLogo = true;

    @Output() menu = new EventEmitter();

    @ViewChild('navigation') navigationTemplate!: TemplateRef<any>;
}
