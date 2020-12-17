// tslint:disable: variable-name
import { ComponentPortal } from '@angular/cdk/portal';
import { OpenOptions, OpenRequest } from './opener';
import { Opener } from './opener';
import { FileEntry } from '../files/_';
import { requireNonNull } from '@platon/shared/utils';

/**
 * Represents the state of the editor.
 */
export interface EditorState {
    /** Current active editor group (the one focused in the workspace could be `null`) */
    readonly activeGroup?: EditorGroup;

    /** Current active editor (the one focused in the `activeGroup` could be `null`). */
    readonly activeEditor?: Editor;

    /** Current active uri (the one focused in explorer tree could be `null`). */
    readonly activeFile?: FileEntry;

    /** Current visible editors */
    readonly visibleEditors: ReadonlyArray<Editor>;
}

/** Represents an editor that is attached to a component. */
export abstract class Editor {
    private static NEXT_ID = 0;

    /** unique identifier of the editor */
    readonly id: string = 'editor#' + ++Editor.NEXT_ID;

    __opener_id__?: any;

    constructor(
    ) {}

    abstract open(request: OpenRequest): Promise<void>;

    equals(o: any): boolean {
        if (!(o instanceof Editor)) {
            return false;
        }
        return o.id === this.id;
    }
}

export class EditorGroup {
    private static NEXT_ID = 0;

    private editor?: Editor;
    private request?: OpenRequest;
    private fileEntries: FileEntry[] = [];
    private component?: ComponentPortal<Editor>;

    /** Unique identifier of this group. */
    readonly id: string = 'editor-group#' + ++EditorGroup.NEXT_ID;

    onComponentAttached?: (editor: Editor) => Promise<void>;

    /** A value indicating whether the group is empty. */
    get isEmpty(): boolean {
        return this.fileEntries.length === 0;
    }

    /** Documents inside the group. */
    get files(): ReadonlyArray<FileEntry> {
        return this.fileEntries;
    }

    /** Current active editor. */
    get activeEditor(): Editor | undefined {
        return this.editor;
    }

    /** Current active file of the group. */
    get activeFile(): FileEntry | undefined {
        return this.request ? this.request.file : undefined;
    }

    /** Component associated to the active editor. */
    get activeComponent(): ComponentPortal<Editor> | undefined {
        return this.component;
    }

    constructor(
        /**
         * Called after a file is opened|focused inside the group.
         * @param group the group.
         * @param resource the file.
         * @param editor the editor on which the file is opened|focused.
         */
        private readonly opened: (
            group: EditorGroup,
            editor: Editor,
            file: FileEntry,
        ) => void,

        /**
         * Called after a file is removed from the group.
         * @param group the group.
         * @param closedFile the closed file.
         * @param nextFile the new file to focus.
         */
        private readonly closed: (
            group: EditorGroup,
            closedFile: FileEntry,
            nextFile?: FileEntry
        ) => void,

        /**
         * Called before file is closed closed.
         * @param group the group.
         * @param file the file to close.
         * @returns A promise that resolve with `true` to confirm the closing
         * or `false` to cancel it.
         */
        private readonly closeGuard: (
            group: EditorGroup,
            file: FileEntry
        ) => Promise<boolean>,

        /** the registered openers of the editor. */
        private readonly openers: ReadonlyArray<Opener>,

        /** the current state of the editor. */
        private readonly editorState: () => EditorState,
    ) {
        requireNonNull(opened, 'opened');
        requireNonNull(closed, 'closed');
        requireNonNull(openers, 'openers');
        requireNonNull(closeGuard, 'closeGuard');
        requireNonNull(editorState, 'editorState');
    }

    /**
     * Checks whether the resource is opened in the group.
     * @param file the file.
     * @throws {ReferenceError} if any of the arguments is null.
     */
    contains(file: FileEntry | string): boolean {
        requireNonNull(file, 'file');
        return this.findFile(e => e.equals(file));
    }

    /**
     * Checks if the given resource is currently active.
     * @param file the file.
     * @throws {ReferenceError} if any of the arguments is null.
     */
    isActive(file: FileEntry | string): boolean {
        requireNonNull(file);
        if (!this.request) {
            return false;
        }
        return this.request.file.equals(file);
    }

    /**
     * Opens a file inside the group.
     *
     * Note: this method will creates a new instance of a component able
     * to open the file only if needed otherwise it will reuse an existing one.
     * @param file the file to open.
     * @param options options to pass to the editor that will open the file.
     * @throws {ReferenceError} if any of the arguments is null.
     * @returns An promise that resolve once the resource is opened.
     */
    async open(file: FileEntry, options: OpenOptions): Promise<void> {
        requireNonNull(file, 'file');
        requireNonNull(options, 'options');

        const request = new OpenRequest(file, options);
        const opener = this.openers.find(e => {
            return e.canHandle(request);
        });
        if (!opener) {
            throw new Error(
                `OpenerNotFound: There is no registered opener to open "${request.file.path}"`
            );
        }

        const openAsync = async (editor: Editor, resolve: () => void) => {
            setTimeout(async () => {
                this.editor = editor;
                this.request = request;

                await editor.open(request);

                this.fileEntries = [
                    file,
                    ...this.fileEntries
                        .filter(e => !e.equals(file))
                        .slice(0, 2)
                ];

                this.opened(this, editor, file);
                resolve();
            }, 30); // avoid ExpressionChangedAfterItHasBeenCheckedError
        };

        return new Promise<void>(async (resolve) => {
            const { visibleEditors } = this.editorState();
            if (this.editor && visibleEditors.find(e => {
                    return e.equals(this.editor) && e.__opener_id__ === opener.id;
                })) {
                await openAsync(this.editor, resolve);
            } else {
                this.component = opener.component();
                this.onComponentAttached = async (editor: Editor) => {
                    editor.__opener_id__ = opener.id;
                    await openAsync(editor, resolve);
                };
            }
        });
    }

    /**
     * Removes a file from the group.
     * @param file the file to close.
     * @throws {ReferenceError} if any of the arguments is null.
     * @returns A promise that resolve with `true` if the file is removed `false` otherwise.
     */
    async close(file: FileEntry | string): Promise<boolean> {
        requireNonNull(file, 'file');
        const index = this.fileEntries.findIndex(e => e.equals(file));
        if (index !== -1) {
            if (
                !(await this.closeGuard(
                    this,
                    this.fileEntries[index]
                ))
            ) {
                return false;
            }
            const closedFile = this.fileEntries.splice(index, 1).pop() as FileEntry;
            if (this.isActive(file) || this.isEmpty) {
                this.editor = undefined;
                this.request = undefined;
                this.component = undefined;
            }
            const newIndex = Math.max(0, index - 1);
            let nextFile: FileEntry | undefined;
            if (!this.activeFile && newIndex < this.fileEntries.length) {
                nextFile = this.fileEntries[newIndex];
            }
            this.closed(this, closedFile, nextFile);
            return true;
        }
        return false;
    }

    /**
     * Closes the documents of the group.
     * @returns A promise that resolve once the closing succeed or fail.
     */
    async closeAll(): Promise<boolean> {
        while (this.fileEntries.length) {
            if (!(await this.close(this.fileEntries[0]))) {
                return false;
            }
        }
        return true;
    }

    /**
     * Closes the saved resources.
     * @returns A promise that resolve with `true` succeed `false` otherwise.
     */
    async closeSaved(): Promise<boolean> {
        while (this.findFile(e => !e.changed)) {
            // tslint:disable-next-line: prefer-for-of
            for (let i = 0; i < this.fileEntries.length; i++) {
                if (!this.fileEntries[i].changed) {
                    if (!(await this.close(this.fileEntries[i]))) {
                        return false;
                    }
                }
            }
        }
        return true;
    }

    equals(o: any): boolean {
        if (!(o instanceof EditorGroup)) {
            return false;
        }
        return o.id === this.id;
    }

    private findFile(predicate: (file: FileEntry) => boolean): boolean {
        return this.fileEntries.some(predicate);
    }
}
