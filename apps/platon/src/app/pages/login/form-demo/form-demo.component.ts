import { Component } from '@angular/core';
import { UserRole } from '@platon/core/auth';

@Component({
  selector: 'app-form-demo',
  templateUrl: './form-demo.component.html',
  styleUrls: ['./form-demo.component.scss']
})
export class FormDemoComponent {
    role: UserRole = 'Teacher';
    admin = false;
}

export interface FormDemo {
    role: UserRole;
    admin: boolean;
}
