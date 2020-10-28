// tslint:disable: no-bitwise

import { ChangeDetectionStrategy, Injector, Component, Input, OnDestroy, ChangeDetectorRef, AfterViewChecked, ElementRef, ViewChild } from '@angular/core';
import { GOTO_LINE_ACTION, INDENT_LINES_ACTION, QUICK_COMMAND_ACTION } from 'nge-monaco';
import { WebComponent, WebComponentHooks } from '../../web-components';
import { WebComponentsChangeDetector } from '../../web-components-change-detector';
import { CodeEditor, CodeEditorComponentDefinition } from './code-editor';

@Component({
    selector: 'wc-code-editor',
    templateUrl: 'code-editor.component.html',
    styleUrls: ['code-editor.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
@WebComponent(CodeEditorComponentDefinition)
export class CodeEditorComponent implements AfterViewChecked, OnDestroy, WebComponentHooks<CodeEditor> {
    private readonly disposables: monaco.IDisposable[] = [];
    private model?: monaco.editor.ITextModel;
    private editor?: monaco.editor.IStandaloneCodeEditor;
    private width = 0;
    private height = 0;

    @Input() state!: CodeEditor;
    @ViewChild('footer', { static: true })
    footer!: ElementRef<HTMLElement>;

    initialCode = '';
    cursor: monaco.IPosition = {
        column: 0,
        lineNumber: 0,
    };
    decorations: any[] = [];

    constructor(
        readonly injector: Injector,
        readonly changeDetector: WebComponentsChangeDetector,
    ) {}

    ngAfterViewChecked() {
        if (!this.editor || !this.footer)
            return;

        const rect = this.footer.nativeElement.getBoundingClientRect();
        if (!rect)
            return;

        const { width , height } = rect;
        if (this.width !== width || this.height !== height) {
            this.editor?.layout();
            this.width = width;
            this.height = height;
        }
    }

    ngOnDestroy() {
        this.disposables.forEach(d => d.dispose());
    }

    onCreateEditor(editor: monaco.editor.IEditor) {
        this.editor = editor as monaco.editor.IStandaloneCodeEditor;

        editor.setModel(this.model = this.model || monaco.editor.createModel(
            this.state.code || '',
            this.state.language || 'plaintext',
        ));

        // OPTIONS
        this.detectOptionsChange();
        this.model.updateOptions({
            tabSize: this.state.tabSize,
            insertSpaces: true,
            trimAutoWhitespace: true,
        });
        this.editor.updateOptions({
            autoIndent: 'advanced',
            lineNumbers: 'on',
            renderWhitespace: 'all',
            quickSuggestions: true,
            renderIndentGuides: true,
            glyphMargin: false,
            renderControlCharacters: true,
            minimap: {
                enabled: true,
            },
            scrollbar: {
                verticalScrollbarSize: 4,
                verticalSliderSize: 4,
            }
        });

        // LISTENERS
        this.disposables.push(this.model);
        this.disposables.push(this.editor);
        this.disposables.push(
            this.model.onDidChangeContent(() => {
                this.changeDetector.ignore(this, () => {
                    this.state.code = this.model?.getValue() || '';
                });
            })
        );
        this.disposables.push(
            this.editor.onDidChangeCursorPosition(e => {
                this.changeDetector.ignore(this, () => {
                    this.cursor = e.position;
                });
            })
        );

        // COMMANDS
        this.editor.addCommand(
            monaco.KeyMod.CtrlCmd | monaco.KeyCode.KEY_S, () => {}, ''
        );

        this.initialCode = this.state.code;
    }

    onChangeState() {
        if (!this.model)
            return;

        monaco.editor.setModelLanguage(
            this.model,
            this.state.language || 'plaintext'
        );

        this.editor?.updateOptions({
            tabSize: this.state.tabSize,
            quickSuggestions: this.state.quickSuggestions
        });
        this.model.setValue(this.state.code);
    }

    reset() {
        this.state.code = this.initialCode;
    }

    goToLine() {
        if (!this.editor)
            return;
        const action = this.editor.getAction(GOTO_LINE_ACTION);
        this.editor.focus();
        action.run();
    }

    quickCommand() {
        if (!this.editor)
            return;
        const action = this.editor.getAction(QUICK_COMMAND_ACTION);
        this.editor.focus();
        action.run();
    }

    changeIndent() {
        if (!this.editor)
            return;
        const action = this.editor.getAction('editor.action.indentUsingSpaces');
        this.editor.focus();
        action.run();
    }


    private detectOptionsChange() {
        if (!this.model)
            return;

        const component = this;
        const updateOptions = this.model.updateOptions;
        this.model.updateOptions = function (
            this: monaco.editor.ITextModel,
            options: monaco.editor.ITextModelUpdateOptions
        ) {
            updateOptions.apply(this, [options]);
            if (options.tabSize) {
                component.changeDetector.ignore(component, () => {
                    component.state.tabSize = options.tabSize || component.state.tabSize;
                });
            }
        };
    }

}
