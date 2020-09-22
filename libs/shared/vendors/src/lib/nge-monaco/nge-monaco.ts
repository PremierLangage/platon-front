import { NgeMonacoModule, NGE_THEMES } from 'nge-monaco';

export const NgeMonacoImport =  NgeMonacoModule.forRoot({
    theming: {
        themes: NGE_THEMES.map(theme => 'assets/themes/' + theme),
        default: 'github'
    }
});
