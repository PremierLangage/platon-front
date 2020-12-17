import { InjectionToken } from '@angular/core';
import { Icon } from '@platon/shared/ui';

/**
 * Areas of the editor where commands can be executed.
 */
export enum CommandScopes {
    InfoBar = 'InfoBar',
    Workbench = 'Workspace',
    EditorGroup = 'EditorGroup',
    ExplorerMenu = 'ExplorerMenu',
    ExplorerTree = 'ExplorerTree',
}

/** Represention of a command. */
export interface ICommand {
    /** Unique identifier of the command. */
    readonly id: string;

    /** Human readable text describing the command. */
    readonly label: string;

    /** Area of the editor where the command belongs to */
    readonly scope: CommandScopes;

    /**
     * Gets a value indicating whether the command
     * can be executed in the current context of the editor.
     */
    condition(): boolean;

    /**
     * Runs the command (
     *  this method will be decorated by
     *  [CommandService](CommandService) to cancel the execution
     * of the command if condition is not required.
     * ).
     */
    run(): void | Promise<void>;
}

/** An abstract command. */
export abstract class Command implements ICommand {

    constructor(
        /** Area of the editor where the command belongs to */
        readonly scope: CommandScopes,
        /** Unique identifier of the command. */
        readonly id: string,
        /** Human readable text describing the command. */
        readonly label: string,
        /** optional icon describing the command. */
        readonly icon?: Icon
    ) {}

    condition(): boolean {
        return true;
    }

    abstract run(): void | Promise<void>;
}

export class CommandEvent {
    static readonly CHANNEL = 'command';

    readonly args: any[] = [];

    // tslint:disable-next-line: variable-name
    private _when: 'before' | 'after' = 'before';

    get when(): 'before' | 'after' {
        return this._when;
    }

    readonly id: string | number;

    constructor(
        readonly commandId: string,
        readonly label: string,
        ...args: any[]
    ) {
        if (args && args.length) {
            this.args = [...args[0]];
        }
        this.id = Date.now();
    }

    end() {
        this._when = 'after';
    }

}

/** Provides new command to the editor. */
export const COMMANDS = new InjectionToken<ICommand[]>('COMMANDS');
