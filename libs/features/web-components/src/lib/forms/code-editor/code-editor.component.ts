import { ChangeDetectionStrategy, Injector, Component, Input, OnDestroy } from '@angular/core';
import { WebComponent, WebComponentHooks } from '../../web-components';
import { CodeEditor, CodeEditorComponentDefinition } from './code-editor';

@Component({
    selector: 'wc-code-editor',
    templateUrl: 'code-editor.component.html',
    styleUrls: ['code-editor.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
@WebComponent(CodeEditorComponentDefinition)
export class CodeEditorComponent implements OnDestroy, WebComponentHooks<CodeEditor> {
    @Input() state!: CodeEditor;

    private readonly disposables: monaco.IDisposable[] = [];
    private model?: monaco.editor.ITextModel;
    private editor?: monaco.editor.IEditor;

    constructor(
        readonly injector: Injector
    ) {}

    ngOnDestroy() {
        this.disposables.forEach(d => d.dispose());
    }

    onCreateEditor(editor: monaco.editor.IEditor) {
        this.editor = editor;
        editor.updateOptions(this.state.options);

        this.model = this.model || monaco.editor.createModel(
            this.state.code || '',
            this.state.language || 'plaintext'
        );

        editor.setModel(this.model);
        this.disposables.push(
            this.model.onDidChangeContent(() => {
                this.state.code = this.model?.getValue() || '';
            })
        );
    }

    onSetState() {
        if (this.model) {
            if (this.state.code !== this.model.getValue()) {
                this.model.setValue(this.state.code);
            }

            if (this.model.getModeId() !== this.state.language) {
                monaco.editor.setModelLanguage(this.model, this.state.language || 'plaintext');
            }

            this.editor?.updateOptions(this.state.options);
        }
    }

}
