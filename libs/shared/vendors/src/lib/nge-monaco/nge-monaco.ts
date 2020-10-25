import { NgeMonacoModule, NGE_THEMES } from 'nge-monaco';

export const NgeMonaco =  NgeMonacoModule.forRoot({
    locale: 'fr',
    theming: {
        themes: NGE_THEMES.map(theme => 'assets/vendors/nge-monaco/themes/' + theme),
        default: 'github',
    }
});
