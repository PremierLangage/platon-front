import { Component, Input, TemplateRef } from '@angular/core';
import { SearchBar } from '@platon/shared/ui/search';
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {
    @Input() bannerTitle!: string;
    @Input() bannerImage!: string;
    @Input() bannerActions?: TemplateRef<any>;
    @Input() bannerSearchBar!: SearchBar<any>;
    @Input() bannerCompletion?: TemplateRef<any>;
    @Input() bannerDescription!: string;

    get bannerImageUrl() {
        return `url(${this.bannerImage})`;
    }
}
