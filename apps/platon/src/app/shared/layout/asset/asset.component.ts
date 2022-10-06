import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, OnInit, ViewChild } from "@angular/core";


@Component({
    selector: 'app-asset',
    templateUrl: './asset.component.html',
    styleUrls: ['./asset.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AssetComponent implements OnInit {

    content = {
        "cid": "0123456789",
        "selector": "wc-radio-group",
        "items": [
            {
                "content": "Choix 1"
            },
            {
                "content": "Choix 2"
            },
            {
                "content": "Choix 3"
            }
        ],
        "disabled": false,
        "selection": "",
        "horizontal": false
    }

    constructor(
        private elementRef: ElementRef,
        private readonly changeDetectorRef: ChangeDetectorRef,
    ) { }

    ngOnInit(): void {

    }

}
