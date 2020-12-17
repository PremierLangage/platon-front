import { ComponentPortal, ComponentType } from '@angular/cdk/portal';
import { BehaviorSubject } from 'rxjs';
import { Command } from '../commands/command';

/**
 * Representation of a part of the editor (statusbar, sidebar...).
 */
export interface View {
    __component__?: ComponentPortal<any>;
    /** Unique identifier of the view. */
    id: string;
    /** Title of the view. */
    title: string;
    /** Component that render the view. */
    component: ComponentType<any>;
    /** Commands attached to the view. */
    commands: BehaviorSubject<Command[]>;
}
