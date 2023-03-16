import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../api/auth.service';

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {

    constructor(
        private readonly router: Router,
        private readonly authService: AuthService,
    ) { }

    async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const user = await this.authService.ready();

        if (user) {
            const roles: ('admin' | 'editor' | 'all')[] = route.data['roles'];
            if (roles.includes('all')) {
                return true;
            }

            if (roles.includes('editor') && !user.isEditor && !user.isAdmin) {
                this.redirect403();
                return false;
            }

            if (roles.includes('admin') && !user.isAdmin) {
                this.redirect403();
                return false;
            }

            return true;
        }

        return this.router.createUrlTree(['/login'], {
            queryParams: { next: state.url },
            queryParamsHandling: 'merge',
        });
    }

    private redirect403() {
        this.router.navigate(['/error/403'], {
            skipLocationChange: true,
        });
    }
}
