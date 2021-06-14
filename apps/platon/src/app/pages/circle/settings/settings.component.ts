import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-circle-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SettingsComponent implements OnInit {
    readonly tabs = [
        { title: 'Général', link: ['general'] },
        { title: 'Membres', link: ['members'] }
    ];

    constructor(
    ) { }

    ngOnInit() {
    }

}
