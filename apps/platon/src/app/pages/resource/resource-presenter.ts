import { Injectable, OnDestroy, ɵclearResolutionOfComponentResourcesQueue } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService, AuthUser } from '@platon/core/auth';
import { Circle, CircleService, FileEntry, FileService, FileTree, Resource, ResourceService, UpdateResourceForm } from '@platon/feature/workspace';
import { NzMessageService } from 'ng-zorro-antd/message';

import { NzUploadFile } from 'ng-zorro-antd/upload';
import { BehaviorSubject, lastValueFrom, Observable, Subscription } from 'rxjs';


@Injectable()
export class ResourcePresenter implements OnDestroy {
    private readonly subscriptions: Subscription[] = [];
    private readonly context = new BehaviorSubject<Context>(
        this.defaultContext
    );

    private id!: number;

    get defaultContext(): Context {
        return { state: 'LOADING' };
    }

    get contextChange(): Observable<Context> {
        return this.context.asObservable();
    }

    constructor(
        private readonly authService: AuthService,
        private readonly fileService: FileService,
        private readonly circleService: CircleService,
        private readonly activatedRoute: ActivatedRoute,
        private readonly messageService: NzMessageService,
        private readonly resourceService: ResourceService,
        private readonly publisherService: PublisherService
    ) {
        this.subscriptions.push(
            this.activatedRoute.params.subscribe((params) => {
                this.onChangeRoute(Number.parseInt(params.id + '', 10));
                this.id = Number.parseInt(params.id + '', 10);
            })
        );
    }

    ngOnDestroy(): void {
        this.subscriptions.forEach((s) => s.unsubscribe());
    }

    fileTree(): Observable<FileTree> {
        const { resource } = this.context.value;
        if (resource) {
            return this.fileService.tree(resource);
        }
        throw new ReferenceError('missing resource');
    }

    async openInLiveUrl(): Promise<string> {
        return `/live/${this.id}`;
    }

    async openInVsCodeUrl(): Promise<string> {
        const authToken = (await this.authService.token())!;
        const rid = this.context.value.resource?.id;
        const { access, refresh } = authToken;
        const origin = location.origin;
        return `vscode://PLaTon.platon-editor?origin=${origin}&resource=${rid}&access=${access}&refresh=${refresh}`;
    }

    async liveUrl(): Promise<string> {
        const rid = this.context.value.resource?.id;
        return `https://platon.org/live/${rid}`;
    }

    async fileContent(file: FileEntry): Promise<string> {
        return lastValueFrom(this.fileService.read(file));
    }

    async update(form: Omit<UpdateResourceForm, 'resource'>): Promise<boolean> {
        const { resource } = this.context.value as Required<Context>;
        try {
            const newResource = await this.resourceService
                .updateResource({
                    resource,
                    ...form,
                })
                .toPromise();

            this.context.next({
                ...this.context.value,
                resource: newResource,
            });

            this.messageService.success(
                'Les informations de la ressource ont bien été modifiées !'
            );
            return true;
        } catch {
            this.alertError();
            return false;
        }
    }

    async getFileContent(file: FileEntry): Promise<string | undefined> {
        try {
            const [user, content] = await Promise.all([
                this.authService.ready(),
                firstValueFrom(this.fileService.read(file))
            ]);
            return content;
        } catch {
            this.alertError();
            return;
        }
    }

    async updateFileContent(file: FileEntry, content: string): Promise<boolean> {
        try {
            await this.authService.ready();
            await this.fileService.update({
                file: file,
                content: content
            }).toPromise();
            return true;
        } catch {
            this.alertError();
        }
        return false;
    }

    async createFile(files: Record<string, { type: 'file' | 'folder', content?: string }>): Promise<boolean> {
        try {
            await this.authService.ready();
            const { resource } = this.context.value;
            if (resource) {
                await this.fileService.create({
                    owner: resource,
                    files: files,
                    description: ''
                }).toPromise();
                return true;
            }
        } catch {
            this.alertError();
        }
        return false;
    }

    async upload(files : NzUploadFile[], description : string, selectedFolder: FileEntry | undefined): Promise<Observable<any>> {
        const { resource } = this.context.value as Required<Context>;
        return this.fileService.create({
            owner: resource,
            files: files,
            description: description,
        }, selectedFolder);
    }

    async delete(file : FileEntry, description : string = ""): Promise<Observable<any>> {
        return this.fileService.delete(file);
    }

    async addFolder(foldername : string, description : string = "aaah",myfiles : any): Promise<Observable<any>> {
        const { resource } = this.context.value as Required<Context>;
        return this.fileService.createFolder({
            owner: resource,
            description: description,
            files: myfiles
        });
    }

    // async upload(
    //     files: Record<string, { type: 'file' | 'folder'; content?: string }>
    // ): Promise<void> {
    //     const { resource } = this.context.value as Required<Context>;
    //     //const authToken = (await this.authService.token())!;
    //     try {
    //         this.fileService.create({
    //             owner: resource,
    //             files: files,
    //         });
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    options(): Observable<any> {
        const { resource } = this.context.value as Required<Context>;
        return this.fileService.options(resource);
    }
    
    private async refresh(resourceId: number): Promise<void> {
        const [user, resource] = await Promise.all([
            this.authService.ready(),
            lastValueFrom(this.resourceService.findById(resourceId)),
        ]);

        const circle = await lastValueFrom(
            this.circleService.findById(resource.circle.id)
        );
        this.context.next({
            state: 'READY',
            user,
            circle,
            resource,
        });
    }

    private async onChangeRoute(circleId: number): Promise<void> {
        try {
            this.refresh(circleId);
        } catch (error) {
            const status = (error as any).status || 500;
            if (status >= 400 && status < 500) {
                this.context.next({ state: 'NOT_FOUND' });
            } else {
                this.context.next({ state: 'SERVER_ERROR' });
            }
        }
    }

    private alertError(): void {
        this.messageService.error(
            'Une erreur est survenue lors de cette action, veuillez réessayer un peu plus tard !'
        );
    }
}

export interface Context {
    state: 'LOADING' | 'READY' | 'SERVER_ERROR' | 'NOT_FOUND' | 'UNAUTHORIZED';
    user?: AuthUser;
    circle?: Circle;
    resource?: Resource;
    publisher?: Publisher;
}
