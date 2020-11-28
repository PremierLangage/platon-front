import { Injectable } from '@angular/core';
import { AssetLoaderService } from './asset-loader.service';
import introJs from 'intro.js';

@Injectable({providedIn: 'root'})
export class IntroService {
    constructor(
        private readonly assetLoader: AssetLoaderService
    ) { }

    async create(options?: {
        element?: HTMLElement,
        querySelector?: string
    }) {
        await this.assetLoader.loadAllSync([
            ['style', 'assets/vendors/intro.js/introjs.css']
        ]).toPromise();
        if (options?.element) {
            return introJs(options.element);
        }
        if (options?.querySelector) {
            return introJs(options.querySelector);
        }
        return introJs();
    }
}
