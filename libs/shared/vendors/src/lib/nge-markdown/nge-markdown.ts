import {
    NgeMarkdownTabbedSetProvider,
    NgeMarkdownAdmonitionsProvider,
    NgeMarkdownLinkAnchorProvider,
    NgeMarkdownKatexProvider,
    NgeMarkdownEmojiProvider,
    NgeMarkdownIconsProvider,
    NgeMarkdownHighlighterProvider,
    NgeMarkdownHighlighterMonacoProvider,
    NgeMarkdownKatexOptionsProvider,
    NgeMarkdownEmojiOptionsProvider,
} from '@mcisse/nge/markdown';

import { NgeMonacoColorizerService } from '@mcisse/nge/monaco';

export const NgeMarkdownProviders = [
    NgeMarkdownKatexProvider,
    NgeMarkdownIconsProvider,
    NgeMarkdownEmojiProvider,
    NgeMarkdownTabbedSetProvider,
    NgeMarkdownLinkAnchorProvider,
    NgeMarkdownAdmonitionsProvider,
    NgeMarkdownHighlighterProvider,
    NgeMarkdownHighlighterMonacoProvider(NgeMonacoColorizerService),
    NgeMarkdownKatexOptionsProvider({
        baseUrl: 'assets/vendors/katex'
    }),
    NgeMarkdownEmojiOptionsProvider({
        url: 'assets/vendors/emoji-toolkit/joypixels.min.js'
    })
];
