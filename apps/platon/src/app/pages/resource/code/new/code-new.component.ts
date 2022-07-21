import { ChangeDetectorRef, Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { NzMessageService } from "ng-zorro-antd/message";
import { Subscription } from "rxjs";
import { ResourcePresenter } from "../../resource-presenter";
import { CodeContext, CodeService } from "../code.service";


@Component({
    selector: 'app-resource-code-new',
    templateUrl: './code-new.component.html',
    styleUrls: ['./code-new.component.scss']
})
export class CodeNewComponent {
    private readonly subscriptions: Subscription[] = [];
    private readonly disposables: monaco.IDisposable[] = [];
    private model?: monaco.editor.ITextModel;

    code: CodeContext = this.codeService.defaultCode;
    save: boolean = false;
    fileName: string = '';

    constructor(
        private readonly presenter: ResourcePresenter,
        private readonly changeDetectorRef: ChangeDetectorRef,
        private readonly messageService: NzMessageService,
        private readonly activatedRoute: ActivatedRoute,
        private readonly codeService: CodeService,
        private router: Router
    ) { }

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

    onCreateEditor(editor: monaco.editor.IEditor) {
        this.model = monaco.editor.createModel('');

        (editor as monaco.editor.IStandaloneCodeEditor)
            .setModel(this.model);
    }

    // TODO move to code service to refresh tree
    async onCreateNewFile(): Promise<void> {
        this.save = true;

        if (!this.fileName) {
            this.messageService.warning('Entrez un nom pour le fichier a créer.');
            return;
        }
        if (!this.model?.getValue()) {
            this.messageService.warning('Vous ne pouvez pas créer un fichier vide.');
            return;
        }

        let files: Record<string, {type: 'file' | 'folder', content?: string}> = {};

        this.fileName.split('/').forEach((v, i, a) => {
            files[a.slice(0, i+1).join('/')] = {
                type: 'folder'
            }
        });

        files[this.fileName] = {
            type: 'file',
            content: this.model.getValue()
        };

        const succed = await this.presenter.createFile(files);
        this.save = false;

        let route = ['tree'];
        this.fileName.split('/').forEach(p => route.push(p));
        this.router.navigate(route, {relativeTo: this.activatedRoute.parent?.parent });
    }
}
