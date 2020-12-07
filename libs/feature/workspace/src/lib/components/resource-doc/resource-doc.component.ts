import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'ws-resource-doc',
    templateUrl: './resource-doc.component.html',
    styleUrls: ['./resource-doc.component.scss'],
})
export class ResourceDocComponent {
    private readonly disposables: monaco.IDisposable[] = [];
    private model?: monaco.editor.ITextModel;

    @Input() documentation = '';
    @Input() editable = true;
    @Output() didSave = new EventEmitter<string>();

    onCreateEditor(editor: monaco.editor.IEditor) {
        editor.updateOptions({
            readOnly: !this.editable
        });

        const model = (this.model =
            this.model ||
            monaco.editor.createModel(this.documentation, 'markdown'));
        editor.setModel(this.model);
        this.disposables.push(
            this.model.onDidChangeContent((e) => {
                this.documentation = model.getValue();
            })
        );
        (editor as monaco.editor.IStandaloneCodeEditor).addCommand(
            // tslint:disable-next-line: no-bitwise
            monaco.KeyMod.CtrlCmd | monaco.KeyCode.KEY_S,
            (e) => {}
        );
    }
}
