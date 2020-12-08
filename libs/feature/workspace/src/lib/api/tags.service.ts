import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, shareReplay, take } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class TagsService {
    private request?: Observable<string>;

    constructor(private readonly http: HttpClient) {}

    cascader() {
        return this.read().pipe(
            map((data) => {
                const root = this.node('');
                data.toString()
                    .split('\n')
                    .reduce(this.appendRecursive.bind(this), root);
                return root.children.slice(1);
            })
        );
    }

    // inspired from https://stackoverflow.com/a/52120780
    node(title: string, lvl?: number) {
        const children: any[] = [];
        let parent: any = null;
        return {
            label: title,
            value: title,
            children: children,
            lvl: () => (lvl === undefined ? -1 : lvl),
            parent: () => parent, //as a function to prevent circular reference when parse to JSON
            setParent: (p: any) => {
                parent = p;
            },
            appendChildren: function (c: any) {
                children.push(c);
                c.setParent(this);
                return this;
            },
        };
    }

    appendRecursive(prev: any, curr: any) {
        if (typeof curr === 'string') {
            //in the recursive call it's a object
            curr = curr.split('    '); //or tab (\t)
            curr = this.node(curr.pop(), curr.length);
        }
        if (curr.lvl() > prev.lvl()) {
            //curr is prev's child
            prev.appendChildren(curr);
        } else if (curr.lvl() < prev.lvl()) {
            this.appendRecursive(prev.parent(), curr); //recursive call to find the right parent level
        } else {
            //curr is prev's sibling
            prev.parent().appendChildren(curr);
        }
        if (prev.children.length === 0) {
            delete prev.children;
            prev.isLeaf = true;
        }
        return curr;
    }

    read(): Observable<string> {
        if (this.request) {
            return this.request;
        }
        return (this.request = this.http
            .get('assets/mocks/tags.txt', {
                responseType: 'text'
            })
            .pipe(take(1), shareReplay(1)));
    }
}
