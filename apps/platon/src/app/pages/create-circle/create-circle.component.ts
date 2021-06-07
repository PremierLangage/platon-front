import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-circle',
  templateUrl: './create-circle.component.html',
  styleUrls: ['./create-circle.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateCircleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
