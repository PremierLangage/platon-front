import { AfterContentInit, Component, ContentChild, Input, OnInit } from '@angular/core';
import { AuthService, AuthUser } from '@platon/core/auth';
import { DrawerComponent } from '../drawer/drawer.component';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit, AfterContentInit {
    @Input() showDrawer = true;
    @ContentChild(DrawerComponent) drawer?: DrawerComponent;

    user?: AuthUser;
    drawerOpened = true;

    constructor(
        private readonly authService: AuthService
    ) { }

    async ngOnInit() {
        this.user = await this.authService.ready();
    }

    ngAfterContentInit() {
        this.drawerOpened = this.drawer != null;
    }

}
