import { Injectable, Injector } from '@angular/core';
import { COMMANDS, ICommand, CommandScopes, CommandEvent } from './command';
import { filter, map } from 'rxjs/operators';
import { NgEventBus } from 'ng-event-bus';

@Injectable()
export class CommandService {
    private ready = false;
    private commands: ICommand[] = [];

    constructor(
        private readonly events: NgEventBus,
        private readonly injector: Injector,
    ) {}

    find<T extends ICommand>(id: string): T {
        this.initIfNotReady();
        if (!id || !id.trim()) {
            throw new ReferenceError('missing required parameter: "id"');
        }
        return this.commands.find(command => {
            return command.id === id;
        }) as T;
    }

    findAll<T extends ICommand>(predicate: (command: ICommand) => boolean): T[] {
        this.initIfNotReady();
        return this.commands.filter(predicate) as T[];
    }

    findAllByPrefix<T extends ICommand>(prefix: string): T[] {
        this.initIfNotReady();
        return this.commands.filter(e => e.id.startsWith(prefix)) as T[];
    }

    findAllByScope<T extends ICommand>(scope: CommandScopes): T[] {
        this.initIfNotReady();
        return this.commands.filter(e => e.scope === scope) as T[];
    }

    forEachCommandInScope<T extends ICommand>(scope: CommandScopes, consumer: (command: T) => void): void {
        this.initIfNotReady();
        this.commands.forEach(e => {
            if (e.scope === scope) {
                consumer(e as T);
            }
        });
    }

    async run(id: string) {
        if (!id || !id.trim()) {
            throw new ReferenceError('missing required parameter: "id"');
        }

        const command = this.find(id);
        if (!command) {
            throw new Error(`undefined command: "${id}"`);
        }
        await command.run();
    }

    beforeRun(commandId: string) {
        return this.events.on(CommandEvent.CHANNEL).pipe(
            map(e => e.data as CommandEvent),
            filter(e => e.commandId === commandId && e.when === 'before')
        );
    }

    beforeRunAny() {
        return this.events.on(CommandEvent.CHANNEL).pipe(
            map(e => e.data as CommandEvent),
            filter(e => e.when === 'before')
        );
    }

    afterRun(commandId: string) {
        return this.events.on(CommandEvent.CHANNEL).pipe(
            map(e => e.data as CommandEvent),
            filter(e => e.commandId === commandId && e.when === 'after')
        );
    }

    afterRunAny() {
        return this.events.on(CommandEvent.CHANNEL).pipe(
            map(e => e.data as CommandEvent),
            filter(e => e.when === 'after'),
        );
    }

    private initIfNotReady() {
        if (this.ready) {
            return;
        }
        try {
            this.commands = this.injector.get(COMMANDS) as ICommand[];
            this.ready = true;
        } catch (error) {
            console.error(error);
            this.commands = [];
        }
        this.decorateCommands();
    }

    private decorateCommands() {
        const events = this.events;
        this.commands.forEach(command => {
            const run = command.run;
            command.run = async (...args) => {
                if (!command.condition()) {
                    console.log('cannot run command');
                    return;
                }
                const event = new CommandEvent(command.id, command.label, 'before', args);
                events.cast(CommandEvent.CHANNEL, event);
                try {
                    await run.apply(command, args);
                } finally {
                    setTimeout(() => {
                        event.end();
                        events.cast(CommandEvent.CHANNEL, event);
                    }, 300);
                }
            };
        });
    }

}
