import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'ide-workbench',
  templateUrl: './workbench.component.html',
  styleUrls: ['./workbench.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WorkbenchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
