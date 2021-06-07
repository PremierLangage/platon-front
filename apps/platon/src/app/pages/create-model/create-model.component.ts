import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-model',
  templateUrl: './create-model.component.html',
  styleUrls: ['./create-model.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateModelComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
