import { Injectable, OnDestroy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { AuthService, AuthUser } from "@platon/core/auth";
import { AssetService } from "@platon/feature/workspace";
import { Asset, UpdateAssetForm } from "libs/feature/workspace/src/lib/models/asset";
import { NzMessageService } from "ng-zorro-antd/message";
import { BehaviorSubject, firstValueFrom, Observable, Subscription } from "rxjs";


@Injectable()
export class AdminCoursDetailPresenter implements OnDestroy {

    private readonly subscriptions: Subscription[] = [];
    private readonly context = new BehaviorSubject<Context>(this.defaultContext);

    private path!: string;
    private change: boolean = false;

    get defaultContext(): Context {
        return { state: 'LOADING' };
    }

    get contextChange(): Observable<Context> {
        return this.context.asObservable();
    }

    constructor(
        private readonly activatedRoute: ActivatedRoute,
        private readonly authService: AuthService,
        private readonly assetService: AssetService,
        private readonly messageService: NzMessageService,
    ) {
        this.subscriptions.push(
            this.activatedRoute.params.subscribe(params => {
                this.onChangeRoute(params.path);
                this.path = params.path;
            })
        );
    }

    ngOnDestroy(): void {
        this.subscriptions.forEach(s => s.unsubscribe());
    }

    private async refresh(path: string): Promise<void> {
        const [user, cours] = await Promise.all([
            this.authService.ready(),
            firstValueFrom(this.assetService.getAssetByPath(path))
        ]);

        this.context.next({
            state: 'READY',
            user,
            cours,
        });
    }

    private async onChangeRoute(path: string): Promise<void> {
        try {
            this.refresh(path);
        } catch (error) {
            const status = (error as any).status || 500;
            if (status >= 400 && status < 500) {
                this.context.next({ state: 'NOT_FOUND'});
            } else {
                this.context.next({ state: 'SERVER_ERROR' });
            }
        }
    }

    async update(form: Omit<UpdateAssetForm, 'path'>): Promise<void> {
        const { cours } = this.context.value as Required<Context>;
        try {
            const newCours = await this.assetService.patch({
                path: cours.path,
                ...form
            }).toPromise();

            this.context.next({
                ...this.context.value,
                cours: newCours
            });

            this.messageService.success('Modification sauvegardé.')
        } catch {
            this.messageService.error('Nous avons pas pu sauvegarder les modifications...');
        }
    }

    changeDescription(desc: string): void {
        let { cours } = this.context.value as Required<Context>;
        cours.content.description = desc;
        this.context.next({
            ...this.context.value,
            cours: cours
        });
    }

    getDescription() {
        if (this.context.value.state !== 'READY') {
            return;
        }
        const { cours } = this.context.value as Required<Context>;
        if (!cours.content.description) {
            cours.content.description = '';
        }
        return cours.content['description'];
    }

    setDescription(description: string) {
        const { cours } = this.context.value as Required<Context>;
        this.context.next({
            ...this.context.value,
            cours: {
                ...cours,
                content: {
                    ...cours.content,
                    description: description
                }
            }
        })
    }

    getSection(id: number) {
        const { cours } = this.context.value as Required<Context>;
        if (!cours.content.sections || !cours.content.sections[id]) {
            this.context.next({ state: 'NOT_FOUND' });
            return;
        }
        return cours.content.sections[id];
    }

    addSection(): void {
        const { cours } = this.context.value as Required<Context>;
        if (!cours.content.sections) {
            cours.content.sections = [];
        }
        cours.content.sections.push({
            position: cours.content.sections.length,
            name: '',
            content: ''
        });

        this.context.next({
            ...this.context.value,
            cours: cours
        });
    }

}

export interface Context {
    state: 'LOADING' | 'READY' | 'SERVER_ERROR' | 'NOT_FOUND' | 'UNAUTHORIZED';
    user?: AuthUser;
    cours?: Asset;
}
