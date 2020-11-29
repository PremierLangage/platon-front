import { Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {
    @Input() bannerTitle!: string;
    @Input() bannerImage!: string;
    @Input() bannerDescription!: string;
    @Input() bannerHint!: string;
    @Input() bannerActions?: TemplateRef<any>;
    @Input() bannerCompletion?: TemplateRef<any>;

    @Input() searchBarId!: string;

    get bannerImageUrl() {
        return `url(${this.bannerImage})`;
    }
}
