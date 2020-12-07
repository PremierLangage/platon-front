import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { AuthUser } from '../../models/auth-user';

@Component({
  selector: 'auth-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AvatarComponent {
    @Input() avatarSize = 32;
    @Input() user?: Partial<AuthUser>;
}
