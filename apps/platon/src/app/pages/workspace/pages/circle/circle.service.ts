import { Injectable, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService, AuthUser } from '@platon/core/auth';
import { Circle, Member, ResourceService } from '@platon/feature/workspace';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { BehaviorSubject, Subscription } from 'rxjs';

@Injectable()
export class CircleService implements OnDestroy {
    private readonly subscriptions: Subscription[] = [];
    private readonly contextEvent = new BehaviorSubject<CirclePageContext>({
        state: 'LOADING',
    });

    get context() {
        return this.contextEvent.asObservable();
    }

    constructor(
        private readonly authService: AuthService,
        private readonly activatedRoute: ActivatedRoute,
        private readonly resourceService: ResourceService,
        private readonly notificationService: NzNotificationService,
    ) {
        this.subscriptions.push(
            this.activatedRoute.params.subscribe(params => {
                this.onChangeRoute(Number.parseInt(params.id + '', 10));
            })
        );
    }

    ngOnDestroy() {
        this.subscriptions.forEach(s => s.unsubscribe());
    }

    update(circle: Circle) {
        this.resourceService.update(circle).then(() => {
            this.notificationService.success(
                'Les informations du cercle ont bien été modifiées !',
                ''
            );
            this.contextEvent.next({
                ...this.contextEvent.value,
                circle
            });
        }).catch(error => {
            console.error(error);
            this.notificationService.error(
                'Une erreur est survenue lors de la sauvegarde des modifications !',
                ''
            );
        });
    }

    addMembers(...contributors: Member[]) {
        const promises = contributors.map(e => {
            return this.resourceService.addMember(e)
        });
        Promise.all(promises).then(() => {
            this.notificationService.success(
                contributors.length + ' membre(s) ont bien été ajoutés au cercle !',
                ''
            );
            this.contextEvent.next({
                ...this.contextEvent.value,
            });
        }).catch(error => {
            console.error(error);
            this.notificationService.error(
                'Une erreur est survenue lors de l\'ajout des membres !',
                ''
            );
        });
    }

    updateMembers(...contributors: Member[]) {
        const promises = contributors.map(e => {
            return this.resourceService.updateMember(e)
        });
        Promise.all(promises).then(() => {
            this.notificationService.success(
                contributors.length + ' membre(s) ont bien été retiré du cercle !',
                ''
            );
            this.contextEvent.next({
                ...this.contextEvent.value,
            });
        }).catch(error => {
            console.error(error);
            this.notificationService.error(
                'Une erreur est survenue lors de la modification des membres!',
                ''
            );
        });
    }

    removeMembers(...contributors: Member[]) {
        const promises = contributors.map(e => {
            return this.resourceService.removeMember(e)
        });
        Promise.all(promises).then(() => {
            this.notificationService.success(
                contributors.length + ' membre(s) ont bien été retirés du cercle !',
                ''
            );
            this.contextEvent.next({
                ...this.contextEvent.value,
            });
        }).catch(error => {
            console.error(error);
            this.notificationService.error(
                'Une erreur est survenue lors de la suppression des membres !',
                ''
            );
        });
    }

    listMembers() {
        const { circle } = this.contextEvent.value;
        if (!circle) {
            throw new Error('Failed to load contributors');
        }
        return this.resourceService.listMembers(circle.id);
    }

    private async onChangeRoute(id: number) {
        this.contextEvent.next({
            state: 'LOADING'
        });

        try {
            const user = await this.authService.ready();
            if (user?.role !== 'Teacher') {
                throw new Error('permission denied, this page is reserved to teachers');
            }

            const circle = await this.resourceService
                .findById<Circle>({ id, type: 'CIRCLE' })
                .toPromise();

            let parent: Circle | undefined;
            if (circle?.parentId) {
                parent = await this.resourceService
                    .findById<Circle>({ id: circle.parentId, type: 'CIRCLE' })
                    .toPromise();
                if (!parent) {
                    throw new Error(`Cannot resolve "${circle.parentId}" as a Circle object !`);
                }
            }

            this.contextEvent.next({
                state: 'READY',
                user: user,
                circle: circle,
                parent: parent
            });
        } catch (error) {
            console.error(error);
            this.contextEvent.next({
                state: 'ERROR'
            });
        }
    }
}

export interface CirclePageContext {
    state: 'LOADING' | 'READY' | 'ERROR';
    user?: AuthUser;
    circle?: Circle;
    parent?: Circle;
}
