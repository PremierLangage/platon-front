import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'ide-media-editor',
  templateUrl: './media-editor.component.html',
  styleUrls: ['./media-editor.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MediaEditorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
