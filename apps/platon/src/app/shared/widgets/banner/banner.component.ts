import { Component, Input, TemplateRef } from '@angular/core';
import { SearchBar } from '@platon/shared/ui';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {
    @Input() bannerTitle!: string;
    @Input() bannerImage!: string;
    @Input() bannerDescription!: string;
    @Input() bannerActions?: TemplateRef<any>;
    @Input() bannerCompletion?: TemplateRef<any>;
    @Input() bannerSearchBar!: SearchBar<any>;

    get bannerImageUrl() {
        return `url(${this.bannerImage})`;
    }
}
