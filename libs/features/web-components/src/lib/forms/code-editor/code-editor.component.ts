import { ChangeDetectionStrategy, Injector, Component, Input, OnDestroy, ChangeDetectorRef } from '@angular/core';
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
    private editor?: monaco.editor.IStandaloneCodeEditor;

    cursor: monaco.IPosition = {
        column: 0,
        lineNumber: 0,
    };

    constructor(
        readonly injector: Injector,
        readonly changeDetector: ChangeDetectorRef,
    ) {}

    ngOnDestroy() {
        this.disposables.forEach(d => d.dispose());
    }

    onCreateEditor(editor: monaco.editor.IEditor) {
        this.editor = editor as monaco.editor.IStandaloneCodeEditor;
        this.model = this.model || monaco.editor.createModel(
            this.state.code || '',
            this.state.language || 'plaintext',
        );

        editor.setModel(this.model);
        editor.updateOptions(this.state.options);

        this.disposables.push(this.model);
        this.disposables.push(this.editor);
        this.disposables.push(
            this.model.onDidChangeContent(() => {
                this.state.code = this.model?.getValue() || '';
            })
        );

        this.disposables.push(
            this.editor.onDidChangeCursorPosition(e => {
                this.cursor = e.position;
                this.changeDetector.detectChanges();
            })
        );
    }

    onSetState() {
        if (!this.model)
            return;

        if (this.state.code !== this.model.getValue()) {
            this.model.setValue(this.state.code);
        }

        if (this.state.language !== this.model.getModeId()) {
            monaco.editor.setModelLanguage(
                this.model,
                this.state.language || 'plaintext'
            );
        }

        this.editor?.updateOptions(this.state.options);
    }

}
