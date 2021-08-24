import { Component, OnInit } from '@angular/core';
import { ActivityPresenter } from '../activity-presenter';

@Component({
  selector: 'app-a2',
  templateUrl: './a2.component.html',
  styleUrls: ['./a2.component.scss']
})
export class A2Component implements OnInit {

  constructor(
    readonly presenter: ActivityPresenter
  ) { }

  ngOnInit() {
  }

}
