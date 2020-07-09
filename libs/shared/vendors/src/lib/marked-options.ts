import { MarkedOptions, MarkedRenderer } from 'ngx-markdown';
import marked from 'marked';

export function markedOptionsFactory(): MarkedOptions {

    const renderer = new MarkedRenderer();

    // https://github.com/jfcere/ngx-markdown/issues/161
    renderer.link = (href: string, title: string, text: string) => {
        if (href.startsWith('#')) {
            const fragment = href.split('#')[1];
            return `<a href="${location.pathname}#${fragment}">${text}</a>`;
        }
        return `<a href="${href}" target="_blank" >${text}</a>`;
    };

    renderer.code = (code: string, language: string, isEscaped: boolean) => {
        const state = {
            code,
            language
        };
        return `<wc-code-viewer state='${JSON.stringify(state)}'></wc-code-viewer>`;
    }


/*     marked.use({
        walkTokens: (token: any) => {
            console.log(token);
        }
    }) */
    return {
        renderer,
        gfm: true,
        breaks: false,
        pedantic: false,
        smartLists: true,
        smartypants: false,
    };
}
