import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: 'ui-dialog-prompt',
    templateUrl: './prompt.component.html',
    styleUrls: ['./prompt.component.scss']
  })
export class PromptComponent {
    constructor(
        readonly dialog: MatDialogRef<PromptComponent>,
        @Inject(MAT_DIALOG_DATA)
        readonly data: PrompOptions
    ) {
        data.okTitle = data.okTitle || 'OK';
        data.noTitle = data.noTitle || 'CANCEL';
    }
}
export interface PrompField {
    type: string;
    placeholder: string;
    required: boolean;
    value: any;
}

export interface PrompOptions {
    title?: string;
    message?: string;
    okTitle?: string;
    noTitle?: string;
    fields: PrompField[];
}
