import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../api/auth.service';

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {

    constructor(
        private readonly auth: AuthService,
        private readonly router: Router,
    ) { }

    async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (await this.auth.ready()) {
            return true;
        }
        this.router.navigate(['/login'], {
            queryParams: { next: state.url },
            queryParamsHandling: 'merge',
            replaceUrl: true
        });
        return false;
    }
}
