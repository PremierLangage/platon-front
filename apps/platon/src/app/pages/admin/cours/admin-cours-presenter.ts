import { Injectable, OnDestroy, OnInit } from "@angular/core";
import { AuthService, AuthUser } from "@platon/core/auth";
import { AssetService, AssetTypes, CoursList, CoursService } from "@platon/feature/workspace";
import { NzMessageService } from "ng-zorro-antd/message";
import { BehaviorSubject, lastValueFrom, Observable, Subscription } from "rxjs";

@Injectable()
export class AdminCoursPresenster implements OnDestroy {

    private readonly subscriptions: Subscription[] = [];
    private readonly context = new BehaviorSubject<Context>(this.defaultContext);

    get defaultContext(): Context {
        return { state: 'LOADING' };
    }

    get contextChange(): Observable<Context> {
        return this.context.asObservable();
    }

    constructor(
        private readonly authService: AuthService,
        private readonly assetService: AssetService,
        private readonly coursService: CoursService,
        private readonly messageService: NzMessageService,
    ) {

    }

    ngOnDestroy(): void {
        this.subscriptions.forEach(s => s.unsubscribe());
    }

    async create(name: string): Promise<boolean> {
        try {
            const type: AssetTypes = 'COURS';
            const user = await this.authService.ready().then(async () => {
                const newCours = await this.assetService.create({
                    type: type,
                    name: name,
                }).toPromise();
                this.messageService.success('Cours ' + name + ' a été crée.');
            });
            return true;
        } catch (error) {
            this.messageService.error('Une erreur est survenue au cours de la création...');
            return false;
        }
    }

    async refresh(): Promise<void> {
        try {
            this.initContext();
        } catch (error) {
            const status = (error as any).status || 500;
            if (status >= 400 && status < 500) {
                this.context.next({ state: 'NOT_FOUND' });
            } else {
                this.context.next({ state: 'SERVER_ERROR' });
            }
        }
    }

    private async initContext(): Promise<void> {
        const [user, assets] = await Promise.all([
            this.authService.ready(),
            lastValueFrom(this.coursService.get())
        ]);

        this.context.next({
            state: 'READY',
            user: user,
            assets: assets
        });
    }

}

export interface Context {
    state: 'LOADING' | 'READY' | 'SERVER_ERROR' | 'NOT_FOUND' | 'UNAUTHORIZED';
    user?: AuthUser;
    assets?: CoursList;
}
