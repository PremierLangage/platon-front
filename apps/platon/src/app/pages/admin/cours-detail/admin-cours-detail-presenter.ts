import { Injectable, OnDestroy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { AuthService, AuthUser } from "@platon/core/auth";
import { CoursDetail, CoursService, UpdateCoursForm } from "@platon/feature/workspace";
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
        private readonly coursService: CoursService,
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
            firstValueFrom(this.coursService.getByName(path))
        ]);

        this.context.next({
            state: 'READY',
            user: user,
            cours: cours,
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

    async update(form: Omit<UpdateCoursForm, 'asset'>): Promise<void> {
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
        const { cours } = this.context.value as Required<Context>;
        try {
            const newCours = await this.coursService.update({
                asset: cours.asset,
                description: cours.description,
                content: cours.content
            }).toPromise();

            this.context.next({
                ...this.context.value,
                cours: newCours
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
        const { cours } = this.context.value as Required<Context>;
        if (!cours.description) {
            cours.description = '';
        }
        return cours.description;
    }

    setDescription(value: string) {
        const { cours } = this.context.value as Required<Context>;
        cours.description = value;
        this.context.next({
            ...this.context.value,
            cours: cours,
            change: true
        });
    }

    getSection(id: number) {
        const { cours } = this.context.value as Required<Context>;
        if (!cours.content.sections || !cours.content.sections[id]) {
            this.context.next({ state: 'NOT_FOUND' , change: false });
            return;
        }
        return cours.content.sections[id];
    }

    setSection(id: number, content: any) {
        let { cours } = this.context.value as Required<Context>;
        if (!cours.content.sections || !cours.content.sections[id]) {
            this.context.next({ state: 'NOT_FOUND', change: false });
        } else {
            cours.content.sections[id].content = content;
            this.context.next({
                ...this.context.value,
                cours: cours,
                change: true
            });
        }
    }

    addSection(): void {
        const { cours } = this.context.value as Required<Context>;
        if (!cours.content.sections) {
            cours.content.sections = [];
        }
        cours.content.sections.push({
            position: cours.content.sections.length,
            name: ''
        });

        this.context.next({
            ...this.context.value,
            cours: cours,
            change: true
        });
    }

}

export interface Context {
    state: 'LOADING' | 'READY' | 'SERVER_ERROR' | 'NOT_FOUND' | 'UNAUTHORIZED';
    user?: AuthUser;
    cours?: CoursDetail;
    change: boolean;
}
