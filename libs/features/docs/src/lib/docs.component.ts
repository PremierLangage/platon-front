import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DocsConfig, Page } from './docs';
import { DocsService } from './docs.service';

@Component({
  selector: 'docs-root',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.scss']
})
export class DocsComponent implements OnInit {
    readonly sitemap = this.docs.sitemap;
    readonly activePage = this.docs.activePage;

    constructor(
        private readonly docs: DocsService,
        private readonly route: ActivatedRoute,
    ) { }

    async ngOnInit() {
        await this.docs.loadSitemap(
            this.route.snapshot.data as DocsConfig
        );
    }

    isActivePage(page: Page) {
        return this.docs.isActivePage(page);
    }
}
