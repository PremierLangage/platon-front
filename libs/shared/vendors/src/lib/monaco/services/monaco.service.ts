import { Inject, Injectable, OnDestroy, Optional } from '@angular/core';
import { Subscription } from 'rxjs';
import { MONACO_LOADED } from '../monaco-config';
import { MonacoThemeDefinition, MONACO_THEME_PROVIDERS } from '../themes/theme';

@Injectable({providedIn: 'root'})
export class MonacoService implements OnDestroy {
    private readonly subscriptions: Subscription[] = [];

    constructor(
        @Optional()
        @Inject(MONACO_THEME_PROVIDERS)
        private readonly themes: MonacoThemeDefinition[]
    ) {
        this.subscriptions.push(
            MONACO_LOADED.subscribe(this.onLoadMonaco.bind(this))
        );
    }

    ngOnDestroy() {
        this.subscriptions.forEach(s => s.unsubscribe());
    }

    private onLoadMonaco() {
        this.registerThemes();
    }

    private registerThemes() {
        if (this.themes) {
            this.themes.forEach(theme => {
                monaco.editor.defineTheme(theme.id, {
                    base: theme.base,
                    inherit: theme.inherit,
                    rules: theme.rules,
                    colors: theme.colors as any
                })
            });
        }
    }
}
