import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    OnDestroy,
    OnInit,
} from '@angular/core';
import { FileEntry, FileTree } from '@platon/feature/workspace';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { Subscription } from 'rxjs';
import { ResourcePresenter } from '../resource-presenter';

@Component({
    selector: 'app-resource-files',
    templateUrl: './files.component.html',
    styleUrls: ['./files.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilesComponent implements OnInit, OnDestroy {
    private readonly subscriptions: Subscription[] = [];

    context = this.presenter.defaultContext;
    tree?: FileTree;

    uploading = false;
    fileList: NzUploadFile[] = [];

    constructor(
        private readonly presenter: ResourcePresenter,
        private readonly changeDetectorRef: ChangeDetectorRef,
        private msg: NzMessageService
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

    beforeUpload(): boolean {
        return true;
    }

    handleUpload(): void {
        const formData = new FormData();
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        this.fileList.forEach((file: any) => {
            formData.append('files[]', file);
        });
        this.uploading = true;

        /*
        // You can use any AJAX library you like
        const req = new HttpRequest('POST', 'https://www.mocky.io/v2/5cc8019d300000980a055e76', formData, {
          // reportProgress: true
        });
        this.http
          .request(req)
          .pipe(filter(e => e instanceof HttpResponse))
          .subscribe(
            () => {
              this.uploading = false;
              this.fileList = [];
              this.msg.success('upload successfully.');
            },
            () => {
              this.uploading = false;
              this.msg.error('upload failed.');
            }
          );
        */
    }
}
