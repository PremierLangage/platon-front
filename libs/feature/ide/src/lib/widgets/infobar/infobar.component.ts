import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'ide-infobar',
  templateUrl: './infobar.component.html',
  styleUrls: ['./infobar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InfobarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
