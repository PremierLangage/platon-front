import { Component, OnInit } from '@angular/core';
import { AuthService, AuthUser } from '@platon/core/auth';
import { SearchBar } from '@platon/shared/ui';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

    user?: AuthUser;

    searchBar: SearchBar<any> =  {
        placeholder: 'Essayez un nom de cours...',
        filterer: {
            filter: (_) => Promise.resolve({
                completions: [],
                queryMatches: []
            }),
        },
        trigger: new Subject<string>(),
        onChange: (response) =>  {},
        onEmpty: () => {
        },
    }
    // ''
    constructor(
        private readonly authService: AuthService
    ) { }

    async ngOnInit() {
        this.user = await this.authService.ready();
    }

}
