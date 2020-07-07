import { MarkedOptions, MarkedRenderer } from 'ngx-markdown';

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

    return {
        renderer,
        gfm: true,
        breaks: false,
        pedantic: false,
        smartLists: true,
        smartypants: false,
    };
}
