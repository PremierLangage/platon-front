import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Command } from '../../../core/commands/command';

@Component({
    selector: 'ide-commands',
    templateUrl: 'commands.component.html',
    styleUrls: ['./commands.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommandsComponent {

    @Input() className = '';
    @Input() commands: Command[] = [];
    @Input() idSuffix = '';

    @Output() run = new EventEmitter();

    _run(command: Command, event: Event) {
        event.preventDefault();
        event.stopPropagation();
        if (this.run.observers.length) {
            this.run.next({
                event,
                command,
            });
        } else {
            command.run();
        }
    }

    _trackCommand(_: number, command: Command): string {
        return command.id;
    }
}
