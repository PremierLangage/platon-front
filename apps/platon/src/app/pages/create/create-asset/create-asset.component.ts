import { Location } from '@angular/common';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    OnInit,
} from '@angular/core';
import { AssetTypes } from '@platon/feature/workspace';
import { zoomInOnEnterAnimation } from 'angular-animations';

@Component({
    selector: 'app-create-asset',
    templateUrl: './create-asset.component.html',
    styleUrls: ['./create-asset.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    // tslint:disable-next-line: no-host-metadata-property
    host: {
        '[@zoomInOnEnter]': 'true',
    },
    animations: [zoomInOnEnterAnimation({ duration: 300 })],
})
export class CreateAssetComponent implements OnInit {
    types: AssetTypes[] = ['COURS', 'ACTIVITY', 'EXERCICE'];

    selectedType: AssetTypes = 'COURS';

    loading = true;
    creating = false;

    constructor(
        private readonly location: Location,
        private readonly changeDetectorRef: ChangeDetectorRef
    ) {}

    async ngOnInit() {
        this.loading = true;

        this.loading = false;
        this.changeDetectorRef.markForCheck();
    }

    dismiss(): void {
        this.location.back();
    }

    async onSubmit() {}

    trackByValue(_: number, item: any) {
        return item;
    }
}
