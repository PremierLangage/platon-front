import { Component, OnInit } from '@angular/core';
import { AuthService, AuthUser } from '@platon/core/auth';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

    user?: AuthUser;
    searchBarId = 'dashboard.searchBar';
    // 'Essayez un nom de cours...'
    constructor(
        private readonly authService: AuthService
    ) { }

    async ngOnInit() {
        this.user = await this.authService.ready();
    }

}
