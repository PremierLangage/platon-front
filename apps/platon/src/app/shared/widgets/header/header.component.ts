import { Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { AuthService, AuthUser } from '@platon/core/auth';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    @Input() showLogo = true;
    @Output() menu = new EventEmitter();
    @ViewChild('navigation') navigationTemplate!: TemplateRef<any>;

    user?: AuthUser;

    constructor(
        private readonly authService: AuthService
    ) { }

    async ngOnInit() {
        this.user = await this.authService.ready();
    }

}
