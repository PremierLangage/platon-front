import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-activity',
  templateUrl: './create-activity.component.html',
  styleUrls: ['./create-activity.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateActivityComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
