import { NgModule } from '@angular/core';
import { CommandService } from './commands/_';
import { DiagnosticService } from './diagnostics/_';
import { EditorService } from './editors/_';
import { FileService } from './files/_';
import { NotificationService } from './notification/_';

@NgModule({
    providers: [
        FileService,
        EditorService,
        CommandService,
        DiagnosticService,
        NotificationService
    ],
})
export class EditorCoreModule { }
