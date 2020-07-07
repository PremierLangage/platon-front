import { Component, Input } from '@angular/core';
import { Page } from '../docs';

@Component({
  selector: 'docs-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {
    @Input() page?: Page | null;
}
