import { NgModule, ModuleWithProviders } from '@angular/core';
import { MonacoEditorModule } from 'ngx-monaco-editor';
import { MONACO_THEME_PROVIDERS } from './themes/theme';
import { DarkTheme } from './themes/dark';
import { LightTheme } from './themes/light';
import { OneDarkProTheme } from './themes/one-dark-pro';

@NgModule({
    imports: [MonacoEditorModule],
    exports: [MonacoEditorModule],
    declarations: []
})
export class VendorsMonacoModule {
    static forRoot(): ModuleWithProviders<VendorsMonacoModule> {
        return {
            ngModule: VendorsMonacoModule,
            providers: [
                { provide: MONACO_THEME_PROVIDERS, multi: true, useClass: DarkTheme },
                { provide: MONACO_THEME_PROVIDERS, multi: true, useClass: LightTheme },
                { provide: MONACO_THEME_PROVIDERS, multi: true, useClass: OneDarkProTheme },
            ]
        }
    }
}
