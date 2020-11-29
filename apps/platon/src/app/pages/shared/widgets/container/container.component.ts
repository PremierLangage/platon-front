import { Component, OnInit } from '@angular/core';
import { AuthService, AuthUser } from '@platon/core/auth';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {
    user?: AuthUser;

    constructor(
        private readonly authService: AuthService
    ) { }

    async ngOnInit() {
        this.user = await this.authService.ready();
    }

}
