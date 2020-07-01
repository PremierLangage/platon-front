import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DocsPlayerRouteData, SiteMap } from './docs-player';
import { DocsPlayerService } from './docs-player.service';

@Component({
  selector: 'docs-player',
  templateUrl: './docs-player.component.html',
  styleUrls: ['./docs-player.component.scss']
})
export class DocsPlayerComponent implements OnInit {
    sitemap?: SiteMap;

    constructor(
        private readonly route: ActivatedRoute,
        private readonly player: DocsPlayerService,
    ) { }

    async ngOnInit() {
        this.sitemap = await this.player.loadSitemap(
            this.route.snapshot.data as DocsPlayerRouteData
        );
    }
}
