import { Injectable, OnDestroy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { AuthService, AuthUser } from "@platon/core/auth";
import { AssetCours, AssetCoursDetail, AssetCoursService, AssetService } from "@platon/feature/workspace";
import { Asset, UpdateAssetForm } from "libs/feature/workspace/src/lib/models/asset";
import { NzMessageService } from "ng-zorro-antd/message";
import { BehaviorSubject, firstValueFrom, Observable, Subscription } from "rxjs";


@Injectable()
export class AdminCoursDetailPresenter implements OnDestroy {

    private readonly subscriptions: Subscription[] = [];
    private readonly context = new BehaviorSubject<Context>(this.defaultContext);

    private path!: string;

    get defaultContext(): Context {
        return { state: 'LOADING', change: false};
    }

    get contextChange(): Observable<Context> {
        return this.context.asObservable();
    }

    constructor(
        private readonly activatedRoute: ActivatedRoute,
        private readonly authService: AuthService,
        private readonly assetService: AssetService,
        private readonly assetCoursService: AssetCoursService,
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
        const [user, asset] = await Promise.all([
            this.authService.ready(),
            firstValueFrom(this.assetCoursService.getByName(path))
        ]);

        this.context.next({
            state: 'READY',
            user: user,
            asset: asset,
            change: false
        });
    }

    private async onChangeRoute(path: string): Promise<void> {
        try {
            this.refresh(path);
        } catch (error) {
            const status = (error as any).status || 500;
            if (status >= 400 && status < 500) {
                this.context.next({ state: 'NOT_FOUND', change: false });
            } else {
                this.context.next({ state: 'SERVER_ERROR', change: false });
            }
        }
    }

    async update(form: Omit<UpdateAssetForm, 'path'>): Promise<void> {
        //const { cours } = this.context.value as Required<Context>;
        try {
            // const newCours = await this.assetService.patch({
            //     path: cours.path,
            //     ...form
            // }).toPromise();

            // this.context.next({
            //     ...this.context.value,
            //     cours: newCours
            // });

            this.messageService.success('Modification sauvegardé.')
        } catch {
            this.messageService.error('Nous avons pas pu sauvegarder les modifications...');
        }
    }

    async save(): Promise<boolean> {
        const { asset } = this.context.value as Required<Context>;
        try {
            const newAsset = await this.assetCoursService.update({
                name: asset.name,
                description: asset.description,
                content: asset.content
            }).toPromise();

            this.context.next({
                ...this.context.value,
                asset: newAsset
            });

            this.messageService.success('Modification sauvegardé.');
            return true;
        } catch {
            this.messageService.error('Nous avons pas pu sauvegarder les modifications...');
            return false;
        }
    }

    getDescription() {
        if (this.context.value.state !== 'READY') {
            return;
        }
        const { asset } = this.context.value as Required<Context>;
        if (!asset.description) {
            asset.description = '';
        }
        return asset.description;
    }

    setDescription(value: string) {
        const { asset } = this.context.value as Required<Context>;
        asset.description = value;
        this.context.next({
            ...this.context.value,
            asset: asset,
            change: true
        });
    }

    getSection(id: number) {
        const { asset } = this.context.value as Required<Context>;
        if (!asset.content.sections || !asset.content.sections[id]) {
            this.context.next({ state: 'NOT_FOUND' , change: false });
            return;
        }
        return asset.content.sections[id];
    }

    setSection(id: number, content: any) {
        let { asset } = this.context.value as Required<Context>;
        if (!asset.content.sections || !asset.content.sections[id]) {
            this.context.next({ state: 'NOT_FOUND', change: false });
        } else {
            asset.content.sections[id].content = content;
            this.context.next({
                ...this.context.value,
                asset: asset,
                change: true
            });
        }
    }

    addSection(): void {
        const { asset } = this.context.value as Required<Context>;
        if (!asset.content.sections) {
            asset.content.sections = [];
        }
        asset.content.sections.push({
            position: asset.content.sections.length,
            name: ''
        });

        this.context.next({
            ...this.context.value,
            asset: asset,
            change: true
        });
    }

}

export interface Context {
    state: 'LOADING' | 'READY' | 'SERVER_ERROR' | 'NOT_FOUND' | 'UNAUTHORIZED';
    user?: AuthUser;
    asset?: AssetCoursDetail;
    change: boolean;
}
