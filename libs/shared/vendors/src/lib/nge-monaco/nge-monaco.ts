import { NgeMonacoModule, NGE_THEMES } from 'nge-monaco';

export const NgeMonacoImport =  NgeMonacoModule.forRoot({
    locale: 'fr',
    theming: {
        themes: NGE_THEMES.map(theme => 'assets/vendors/nge-monaco/themes/' + theme),
        default: 'github',
    }
});
