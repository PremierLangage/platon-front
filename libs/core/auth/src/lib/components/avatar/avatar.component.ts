import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';
import { AuthUserService } from '../../api/auth-user.service';
import { AuthUser } from '../../models/auth-user';

@Component({
  selector: 'auth-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AvatarComponent {
    @Input() avatarSize = 32;
    @Input() user?: AuthUser;

    @Input()
    set username(value: string) {
        this.authUserService.findByUserName(value).toPromise().then(user => {
            this.user = user;
            this.changeDetectorRef.markForCheck();
        });
    }

    constructor(
        private readonly authUserService: AuthUserService,
        private readonly changeDetectorRef: ChangeDetectorRef,
    ) {}


}
