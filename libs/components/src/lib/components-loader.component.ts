import { Component, OnDestroy, OnInit } from '@angular/core';
import { ComponentLoaderService } from '@juristr/ngx-lazy-el';

/**
 * Dynamically detect and lazy load web components in the dom.
 */
@Component({
    selector: 'platon-components-loader',
    template: '',
})
export class ComponentsLoaderComponent implements OnInit, OnDestroy {
    private observer?: MutationObserver;

    constructor(
        private readonly componentLoader: ComponentLoaderService,
    ) {}

    async ngOnInit() {
        this.observeWebComponents(
            await this.lazyLoadWebComponents()
        );
    }

    ngOnDestroy() {
        this.observer?.disconnect();
    }

    /**
     * Detect the web components during the initial load of the page and lazy load them.
     * @returns A promise that resolves with a list of the remaining unloaded element selectors
     */
    private async lazyLoadWebComponents() {
        let unloadedSelectors = Array.from(this.componentLoader.getComponentsToLoad());
        for (const tag of unloadedSelectors) {
            const node = document.getElementsByTagName(tag);
            if (node.length) {
                await this.componentLoader.loadComponent(tag);
                unloadedSelectors = unloadedSelectors.filter(e => e !== tag);
            }
        }
        return unloadedSelectors;
    }

    /**
     * Detect the web components after the initial load of the page and lazy load them.
     * @param unloadedTags the list of unloaded elements.
     */
    private observeWebComponents(unloadedTags: string[]) {
        const target = document.body;
        const config = {
            childList: true,
            subtree: true,
        };
        this.observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                // handle mutations here
                mutation.addedNodes.forEach((node) => {
                    const element = node as HTMLElement;
                    const tag = element.tagName.toLowerCase();
                    if (unloadedTags.includes(tag)) {
                        unloadedTags = unloadedTags.filter(e => e !== tag);
                        this.componentLoader.loadComponent(tag).catch(console.error);
                    }
                });
            });
        });
        this.observer.observe(target, config);
        return unloadedTags;
    }

}
