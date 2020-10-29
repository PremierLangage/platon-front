import { NgeMonacoModule, NGE_THEMES } from 'nge-monaco';

export const NgeMonacoImports = [
    NgeMonacoModule.forRoot({
        locale: 'fr',
        assets: 'assets/vendors/nge-monaco/monaco',
        theming: {
            themes: NGE_THEMES.map(theme => 'assets/vendors/nge-monaco/themes/' + theme),
            default: 'github',
        }
    })
];
