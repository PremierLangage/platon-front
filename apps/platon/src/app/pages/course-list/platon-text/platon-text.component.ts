import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-platon-text',
    templateUrl: './platon-text.component.html',
    styleUrls: ['./platon-text.component.scss'],
})
export class PlatonTextComponent implements OnInit {
    @Input() rawText: string = "";
    parsedText: string = "";
    constructor() {}

    ngOnInit() {}

    ngOnChanges(): void {
        this.parsedText = this.parseMarkdownToHtml();
    }

    parseMarkdownToHtml(): string {
        var regexps: { [key: string]: RegExp } = {
            // BOXES
            "<pre class=\"$1\">$2</pre>": /```([a-z]*)\s*[\n]+(.+)[\n]+```/,
            "<div class=\"quote\">$1</div>": />\s(.+)\n/,
            "$1 <br>": /(<div class=\"quote\">.+)<\/div>\s*<div class=\"quote\">/,

            // TITLES
            "<h6>$1</h6>": /######\s*(.+)(\s\s\n)?/,
            "<h5>$1</h5>": /#####\s*(.+)(\s\s\n)?/,
            "<h4>$1</h4>": /####\s*(.+)(\s\s\n)?/,
            "<h3>$1</h3>": /###\s*(.+)(\s\s\n)?/,
            "<h2>$1</h2>": /##\s*(.+)(\s\s\n)?/,
            "<h1>$1</h1>": /#\s*(.+)(\s\s\n)?/,

            "$1<br>": /(.+)  \n/,

            // TEXT FORMAT
            "<b>$1</b>": /\*\*([^\s](.+)[^\s])\*\*/,
            "<i>$1</i>": /\*([^\s](.+)[^\s])\*/,
            "<span class=\"underlined\">$1</span>": /__(.+)__/,

            "<span class=\"spoiler\">$1</span>": /\|\|(.+)\|\|/,
            "<span class=\"stroked\">$1</span>": /~(.+)~/,
            "<code>$1</code>": /`([^`].+[^`])`/,

            // LISTS
            // detect list elems
            "<liul>$1</liul>": /\s*[-+*]\s(.+)/,
            "<liol>$1</liol>": /\s*[0-9]+\.\s(.+)/,

            // wrap list elems with ol/ul tags
            "<ol>$1</ol>": /(<liol>.+<\/liol>)+/,
            "<ul>$1</ul>": /(<liul>.+<\/liul>)+/,

            // make them classic list items
            "<$1li>": /<(\/?)li(o|u)l>/,
        }

        var parsedTxt: string = this.rawText;
        Object.keys(regexps).forEach(regex => {
            while (regexps[regex].test(parsedTxt)) {
            parsedTxt = parsedTxt.replace(regexps[regex], regex + "\r");
            if (/<(o|u)l>.+/.test(regex)) return;
            }
        });
        return parsedTxt;
    }
}

