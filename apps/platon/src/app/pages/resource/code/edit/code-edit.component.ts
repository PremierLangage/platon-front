import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { FileEntry } from "@platon/feature/workspace";
import { NzMessageService } from "ng-zorro-antd/message";
import { Subscription } from "rxjs";
import { ResourcePresenter } from "../../resource-presenter";
import { CodeContext, CodeService } from "../code.service";


@Component({
    selector: 'app-resource-code-edit',
    templateUrl: './code-edit.component.html',
    styleUrls: ['./code-edit.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CodeEditComponent implements OnInit, OnDestroy {
    private readonly subscriptions: Subscription[] = [];
    private readonly disposables: monaco.IDisposable[] = [];
    private model?: monaco.editor.ITextModel;

    code: CodeContext = this.codeService.defaultCode;
    save: boolean = false;

    constructor(
        private readonly presenter: ResourcePresenter,
        private readonly messageService: NzMessageService,
        private readonly changeDetectorRef: ChangeDetectorRef,
        private readonly activatedRoute: ActivatedRoute,
        private readonly codeService: CodeService,
        private router: Router
    ) {

    }

    ngOnInit(): void {
        this.subscriptions.push(
            this.codeService.codeChange.subscribe(code => {
                this.code = code;
                this.changeDetectorRef.markForCheck();
            }),
            this.activatedRoute.url.subscribe(urls => {
                this.codeService.onChangeRoute(urls);
            })
        );
    }

    ngOnDestroy(): void {
        this.subscriptions.forEach(s => s.unsubscribe());
        this.disposables.forEach(d => d.dispose());
    }

    didGoBackTree(path?: string): void {
        let route = ['tree']
        path?.split('/').forEach(p => route.push(p));
        this.router.navigate(route, { relativeTo: this.activatedRoute.parent?.parent });
    }

    onCreateEditor(editor: monaco.editor.IEditor) {
        this.model = monaco.editor.createModel(this.code.file?.content || '', this.code.file?.entry?.mime);

        (editor as monaco.editor.IStandaloneCodeEditor)
            .setModel(this.model);
    }

    async onSave(file?: FileEntry): Promise<void> {
        this.save = true;
        const content = this.model?.getValue();
        if (content && file) {
            const succed = await this.presenter.updateFileContent(file, content);
            if (succed) {
                this.save = false;
                this.didGoBackTree(file.path);
            } else {
                this.alertError()
            }

        } else {
            this.alertError();
        }
        this.save = false;
    }

    private alertError(): void {
        this.messageService.error(
            'Une erreur est survenue lors de la sauvegarde, veuillez réessayer un peu plus tard !'
        );
    }

}
