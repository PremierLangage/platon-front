import { Injectable, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService, AuthUser } from '@platon/core/auth';
import { Resource, Circle, Member, ResourceService, ResourceTypes, Exercise, Activity, PublishableResource, ResourceEvent } from '@platon/feature/workspace';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { BehaviorSubject, Subscription } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable()
export class DetailService implements OnDestroy {
    private readonly subscriptions: Subscription[] = [];
    private readonly contextEvent = new BehaviorSubject<DetailContext>({
        state: 'LOADING',
        events: [],
        members: [],
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

    update(resource: Resource) {
        this.resourceService.update(resource).then(() => {
            this.notificationService.success(
                'Les informations de la ressource ont bien été modifiées !',
                ''
            );
            this.refreshContext(resource);
        }).catch(error => {
            console.error(error);
            this.notificationService.error(
                'Une erreur est survenue lors de la sauvegarde des modifications !',
                ''
            );
        });
    }

    addMembers(...members: Member[]) {
        const promises = members.map(e => {
            return this.resourceService.addMember(e)
        });
        Promise.all(promises).then(() => {
            this.notificationService.success(
                members.length + ' membre(s) ont bien été ajoutés !',
                ''
            );
            this.refreshContext();
        }).catch(error => {
            console.error(error);
            this.notificationService.error(
                'Une erreur est survenue lors de l\'ajout des membres !',
                ''
            );
        });
    }

    updateMembers(...members: Member[]) {
        const promises = members.map(e => {
            return this.resourceService.updateMember(e)
        });
        Promise.all(promises).then(() => {
            this.notificationService.success(
                members.length + ' membre(s) ont bien été modifiés !',
                ''
            );
            this.refreshContext();
        }).catch(error => {
            console.error(error);
            this.notificationService.error(
                'Une erreur est survenue lors de la modification des membres!',
                ''
            );
        });
    }

    removeMembers(...members: Member[]) {
        const promises = members.map(e => {
            return this.resourceService.removeMember(e)
        });
        Promise.all(promises).then(() => {
            this.notificationService.success(
                members.length + ' membre(s) ont bien été retirés !',
                ''
            );
            this.refreshContext();
        }).catch(error => {
            console.error(error);
            this.notificationService.error(
                'Une erreur est survenue lors de la suppression des membres !',
                ''
            );
        });
    }

    private isMember(members: Member[], member: Partial<AuthUser>) {
        return !!members.find(e => e.id === member.id);
    }

    private async onChangeRoute(id: number) {
        this.contextEvent.next({
            state: 'LOADING',
            events: [],
            members: [],
        });

        const data = this.activatedRoute.snapshot.data as DetailPageData;
        try {
            const user = await this.authService.ready();
            if (user?.role !== 'Teacher') {
                throw new Error('permission denied, this page is reserved to teachers');
            }

            const resource = await this.resourceService
                .findById({ id, type: data.resourceType })
                .toPromise();

            if (!resource) {
                throw new Error(`permission denied, resource "${id}" not found: `);
            }

            const [events, members] = await Promise.all([
                this.resourceService.listEvents({
                    resourceId: id,
                    resourceType: data.resourceType
                }).pipe(take(1)).toPromise(),
                this.resourceService.listMembers(
                    this.getCircleId(resource)
                ).pipe(take(1)).toPromise()
            ]);

            this.contextEvent.next({
                state: 'READY',
                user,
                events,
                members,
                resource,
                isAdmin: user.isAdmin,
                isMember: this.isMember(members, user),
            });

        } catch (error) {
            console.error(error);
            this.contextEvent.next({
                state: 'ERROR',
                events: [],
                members: [],
            });
        }
    }

    private getCircleId(resource: Resource) {
        let circleId = -1;
        switch (resource.type) {
            case 'CIRCLE':
                circleId = resource.id;
                break;
            case 'EXERCISE':
            case 'ACTIVITY':
                circleId = (resource as PublishableResource).circle.id;
                break;
        }
        return circleId;
    }

    private async refreshContext(resource?: Resource) {
        if (!resource) {
            resource = this.contextEvent.value.resource;
        }
        if (resource) {
            const [events, members] = await Promise.all([
                this.resourceService.listEvents({
                    resourceId: resource.id,
                    resourceType: resource.type
                }).pipe(take(1)).toPromise(),
                this.resourceService.listMembers(
                    this.getCircleId(resource)
                ).pipe(take(1)).toPromise()
            ]);
            this.contextEvent.next({
                ...this.contextEvent.value,
                resource,
                events,
                members
            })
        }
    }
}

export interface DetailPageData {
    resourceType: ResourceTypes;
}

export interface DetailContext {
    state: 'LOADING' | 'READY' | 'ERROR';
    members: Member[];
    events: ResourceEvent[];
    user?: AuthUser;
    resource?: Resource;
    isAdmin?: boolean;
    isMember?: boolean;
}
