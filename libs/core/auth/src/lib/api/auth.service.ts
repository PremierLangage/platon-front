import { Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { DynamicInjectorService } from '@platon/shared/utils';
import { Observable } from 'rxjs';
import { shareReplay, take } from 'rxjs/operators';
import { AuthObserver, AUTH_OBSERVER } from '../models/auth';
import { AuthProvider } from '../models/auth-provider';
import { AuthUser } from '../models/auth-user';
import { AuthUserService } from './auth-user.service';

/**
 * Facade class that will provide access to the authentification api of the platform.
 */
@Injectable({providedIn: 'root'})
export class AuthService {
    private user?: AuthUser;
    private request?: Observable<AuthUser | undefined>;

    private get provider() {
        return this.dynamicInjector.get<AuthProvider>(AuthProvider);
    }

    private get observers(): AuthObserver[] {
        return this.injector.get<Function[]>(AUTH_OBSERVER, []).map(type => {
            return this.injector.get(type);
        });
    }

    constructor(
        private readonly router: Router,
        private readonly injector: Injector,
        private readonly userService: AuthUserService,
        private readonly dynamicInjector: DynamicInjectorService,
    ) { }

    /**
     * Checks whether there is an authentificated user or not.
     *
     * Note:
     * This method will notify all the observers that implements `AuthObserver` interface if needed.
     *
     * @returns An promise that will resolves with the authentificated user if it exists or `undefined`
     */
    async ready(): Promise<AuthUser | undefined> {
       if (this.request) {
            return this.request.toPromise();
        }

        let uid: string | undefined;
        try {
            uid = await this.uid();
        } finally {
            if (!uid) {
                this.redirect('/login');
                return undefined;
            }
        }

        if (!this.user) {
            if (!this.request) {
                this.request = new Observable<AuthUser|undefined>(observer => {
                    // tslint:disable-next-line: no-non-null-assertion
                    this.connect(uid!).then((user) => {
                        observer.next(user);
                        observer.complete();
                        this.request = undefined;
                    }).catch(error => {
                        observer.error(error);
                        observer.complete();
                        this.request = undefined;
                    });
                }).pipe(
                    take(1),
                    shareReplay(1)
                );
            }
            return this.request?.toPromise();
        }
        return this.user;
    }

    /**
     * Gets the unique ID of the current user
     * or null if there is no logged user.
     */
    uid(): Promise<string | undefined> {
        return this.provider.uid();
    }

    /**
     * Sign out the current user.
     *
     * Note:
     * This method will notify all the observers that implements `AuthObserver` interface if needed.
     *
     **/
    async signOut(): Promise<void> {
        await this.router.navigateByUrl('/login', { replaceUrl: true });
        if (this.user) {
            for (const observer of this.observers) {
                await observer.onChangeAuth({
                    type: 'disconnection',
                    user: this.user
                });
            }
            this.user = undefined;
        }
        if (await this.uid()) {
            await this.provider.signOut();
        }
    }

    /**
     * Signs in an user using email and password.
     * @param email the email of the user
     * @param password the password of the user
     */
    async signInWithEmailAndPassword(email: string, password: string): Promise<void> {
        await this.provider.signInWithEmailAndPassword(email, password);
        await this.ready();
    }

    private redirect(url: string) {
        this.router.navigateByUrl(url, {
            replaceUrl: true,
            queryParams: { next: this.router.url }
        });
    }

    private async connect(uid: string) {
        const user = this.user = await this.userService.findById(uid).toPromise();
        if (user == null) {
            throw new Error('There is no user record found for ' + uid);
        }

        for (const observer of this.observers) {
            await observer.onChangeAuth({
                user,
                type: 'connection',
            });
        }
        return user;
    }

}
