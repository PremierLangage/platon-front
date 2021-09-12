import { Component, Input, OnInit } from '@angular/core';
import { Asset } from './assets.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-asset',
  templateUrl: './assets.component.html',
  styleUrls: ['./assets.component.scss'],
  providers: [DatePipe],
})
export class AssetComponent implements OnInit {
    @Input() asset!: Asset;

    constructor(
        private datePipe: DatePipe,
    ) { }

    ngOnInit() {
    };

    convertDate(date: string) {
        try {
            return this.datePipe.transform(date, 'dd-MM-yyyy');
        } catch {
            return date;
        }
    }
}
