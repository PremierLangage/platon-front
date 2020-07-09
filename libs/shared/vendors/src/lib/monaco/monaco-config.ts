import { Subject } from 'rxjs';
import { NgxMonacoEditorConfig } from 'ngx-monaco-editor';
/** Subject that emit first time monaco editor is loaded */
export const MONACO_LOADED = new Subject<typeof monaco>();

export const MONACO_CONFIG: NgxMonacoEditorConfig = {
    baseUrl: '/assets',
    defaultOptions: {
        automaticLayout: true,
    },
    onMonacoLoad,
};

export function onMonacoLoad() {
    MONACO_LOADED.next(monaco);
}
