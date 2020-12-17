import { ComponentPortal, ComponentType } from '@angular/cdk/portal';
import { InjectionToken } from '@angular/core';
import { requireNonNull } from '@platon/shared/utils';
import { Editor, EditorGroup } from './editor';
import { FileEntry } from '../files/_';

/**
 * Represents file open options.
 */
export interface OpenOptions {

    /** force the editor to open the file in a new group */
    readonly openToSide?: boolean;

    /** force the editor to open the file in this group */
    readonly openInGroup?: EditorGroup;

    /** jumping at the given position after the resource is opened */
    readonly position?: {
        line: number;
        column: number;
    };

    /** open the resource with diff editor */
    readonly diff?: {
        content: string
    };
}

/**
 * Represents file open request.
 */
export class OpenRequest {

    constructor(
        readonly file: FileEntry,
        readonly options: OpenOptions,
    ) {
        requireNonNull(file, 'file');
        requireNonNull(options, 'options');
    }

    equals(o: any): o is OpenRequest {
        if (!(o instanceof OpenRequest)) {
            return false;
        }
        return o.file.equals(this.file);
    }

}

/**
 * An opener is responsible for handling file open request.
 * Each opener is associated to a component that extends it.
 */
export abstract class Opener {
    private static NEXT_ID = 0;

    /** unique identifier of the opener */
    readonly id: string = 'opener#' + ++Opener.NEXT_ID;

    constructor(
        private readonly componentType: ComponentType<any>
    ) {}

    /** Creates new instance of the component associated to the editor. */
    component(): ComponentPortal<Editor> {
        return new ComponentPortal(this.componentType);
    }

    /**
     * Checks whether this opener can handle the given `request`.
     * @param request the request to handle.
     */
    abstract canHandle(request: OpenRequest): boolean;
}

export const OPENERS = new InjectionToken<Opener[]>('OPENERS');
