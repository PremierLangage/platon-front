import {
    HttpEvent,
    HttpEventType,
    HttpRequest,
    HttpResponse,
} from '@angular/common/http';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    OnDestroy,
    OnInit,
} from '@angular/core';
import { FileEntry, FileTree } from '@platon/feature/workspace';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzUploadFile, NzUploadXHRArgs } from 'ng-zorro-antd/upload';
import { observable, Subscription } from 'rxjs';
import { ResourcePresenter } from '../resource-presenter';

@Component({
    selector: 'app-resource-files',
    templateUrl: './files.component.html',
    styleUrls: ['./files.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilesComponent implements OnInit, OnDestroy {
    private readonly subscriptions: Subscription[] = [];

    description: string = "";
    desc: string = "aaa";
    foldername: string = "";
    files: Record<string, { type: 'folder'; content?: string }> = {
        "foldername": {
            "type": "folder",
            "content": ""
        }
    };

    context = this.presenter.defaultContext;
    tree?: FileTree;

    percent: number = 0;
    file: NzUploadFile[] = [];

    uploading = false;

    constructor(
        private readonly presenter: ResourcePresenter,
        private readonly changeDetectorRef: ChangeDetectorRef,
        private messageService: NzMessageService
    ) {}

    ngOnInit() {
        this.subscriptions.push(
            this.presenter.contextChange.subscribe(async (context) => {
                this.context = context;
                this.tree = await this.presenter.fileTree().toPromise();
                this.changeDetectorRef.markForCheck();
            })
        );
    }

    ngOnDestroy(): void {
        this.subscriptions.forEach((s) => s.unsubscribe());
    }

    async refreshFiles() {
        this.tree = await this.presenter.fileTree().toPromise();
        this.changeDetectorRef.markForCheck();
    }

    delete(file : FileEntry) {
        this.presenter.delete(file).then((request) => {
            request.subscribe(
                (event) => {
                    this.messageService.success("Fichier supprimer avec succès.");
                    this.refreshFiles();
                },
                (error) => {
                    this.messageService.error("Erreur avec la suppression du fichier.");
                }
            )
        });

    }

    addFolder(){
        this.presenter.addFolder(this.foldername,this.desc,this.files).then((request) => {
            request.subscribe (
                (event) => {
                    this.messageService.success("Dossier créé avec succès");
                    this.refreshFiles();
                },
                (error) => {
                    this.messageService.error("Erreur avec la création du dossier.");
                }
            )
        }
        )
    }

    beforeUpload = (file: NzUploadFile): boolean => {
        let present = this.file.find((f) => {
            return f.name === file.name;
        });
        if (present) {
            this.messageService.error(present.name + ' déjà présent.');
            return false;
        }
        this.file = this.file.concat(file);
        this.messageService.info(file.name + ' fichier chargé.');
        return false;
    };

    handleUpload(): void {
        this.uploading = true;
        this.presenter.upload(this.file, this.description).then((request) => {
            request.subscribe(
                (event) => {
                    switch (event.type) {
                        case HttpEventType.UploadProgress:
                            this.percent = Math.round(
                                100 * (event.loaded / event.total)
                            );
                            break;
                        case HttpEventType.Response:
                            // item.status = 'success';
                            // this.files = this.files.filter(
                            //     (file) => file !== item
                            // );
                            // this.messageService.success(
                            //     item.name + ' uploader.'
                            // );
                            this.uploading = false;
                            this.refreshFiles();
                            break;
                    }
                    this.changeDetectorRef.markForCheck();
                },
                (error) => {
                    // item.status = 'error';
                    // item.response = error;

                    this.messageService.error(/*item.name + */' erreur upload.');
                    console.log('Something going wrong');
                    console.log(error);
                }
            );
        });
        this.file = [];
        this.description = "";
    }
}
