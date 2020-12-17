import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'ide-statusbar',
  templateUrl: './statusbar.component.html',
  styleUrls: ['./statusbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StatusbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
