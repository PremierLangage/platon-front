import { Inject, Injectable, Predicate } from '@angular/core';
import { ConfirmOptions, DialogService } from '@platon/shared/ui';
import { requireNonNull, requireNonNullString } from '@platon/shared/utils';
import { BehaviorSubject, PartialObserver, Subject } from 'rxjs';
import { URI } from 'vscode-uri';
import { CommandService } from '../commands/_';
import { Diagnostic, DiagnosticGroup, DiagnosticService } from '../diagnostics/_';
import { FileEntry, FileService } from '../files/_';
import { Notification, NotificationService } from "../notification/_";
import { Editor, EditorGroup, EditorState } from './editor';
import { Opener, OPENERS, OpenOptions } from './opener';
import { Preview } from './preview';

@Injectable()
export class EditorService {
    private readonly groups: Map<string, EditorGroup> = new Map();

    /** Emitted before the user leave the editor. */
    readonly onDidBeforeLeave = new Subject<void>();

    /** Emitted before saving a file. */
    readonly onDidBeforeSaveFile = new Subject<FileEntry>();

    /** Emitted after saving a file. */
    readonly onDidAfterSaveFile = new Subject<FileEntry>();

    /** Emitted before closing a file. */
    readonly onDidBeforeCloseFile = new Subject<FileEntry>();

    /** Emitted after closing a file. */
    readonly onDidAfterCloseFile = new Subject<FileEntry>();

    /** Emitted before opening a file. */
    readonly onDidBeforeOpenFile = new Subject<FileEntry>();

    /** Emitted after opening a file. */
    readonly onDidAfterOpenFile = new Subject<FileEntry>();

    /** Emitted when a preview is request. */
    readonly onDidPreview = new Subject<Preview>();

    /** Opened opened editor groups. */
    readonly editorGroups = new BehaviorSubject<EditorGroup[]>([]);

    /** State of the editor. */
    readonly state: BehaviorSubject<EditorState> = new BehaviorSubject<EditorState>({
        visibleEditors: [],
    });

    /** shorcut to state.value.activeGroup */
    get activeGroup(): EditorGroup | undefined {
        return this.state.value.activeGroup;
    }

    /** shorcut to state.value.activeEditor */
    get activeEditor(): Editor | undefined {
        return this.state.value.activeEditor;
    }

    /** shorcut to state.value.activeFile */
    get activeFile(): FileEntry | undefined {
        return this.state.value.activeFile;
    }

    /** shorcut to state.value.visibleEditors */
    get visibleEditors(): ReadonlyArray<Editor> {
        return this.state.value.visibleEditors;
    }

    get notifCount(): number {
        return this.notifs.count;
    }

    get diagnosticCount(): number {
        return this.diagnostics.count;
    }

    constructor(
        @Inject(OPENERS)
        private readonly openers: Opener[],
        private readonly fs: FileService,
        private readonly dialog: DialogService,
        private readonly notifs: NotificationService,
        private readonly commands: CommandService,
        private readonly diagnostics: DiagnosticService,
    ) {}


    findCommand(id: string) {
        return this.commands.find(id);
    }

    onDidReceiveNotifications(observer: PartialObserver<Notification[]>) {
        return this.notifs.subscribe(observer);
    }

    onDidChangeDiagnoticsIn(uri: string, observer: PartialObserver<Diagnostic[]>) {
        return this.diagnostics.subscribe(uri, observer);
    }

    onDidChangeDiagnotics(observer: PartialObserver<DiagnosticGroup[]>) {
        return this.diagnostics.subscribeAll(observer);
    }

    /**
     * Checks whether the file is opened.
     * @param file the file.
     * @throws {ReferenceError} if the file is null.
     */
    isOpened(file: FileEntry) {
        requireNonNull(file, 'file');
        return this.fs.isOpened(file);
    }

    /**
     * shorcut to `NotificationService.catch` method.
     * @param error server or js error to catch.
     */
    catch(error: any) {
        this.notifs.catch(error);
    }

    /**
     *  Checks whether `group` is the active one inside the editor.
     * @param group the group.
     * @throws {ReferenceError} if `group` is `null` | `undefined`.
     */
    isActiveGroup(group: EditorGroup): boolean {
        requireNonNull(group, 'group');
        const active = this.state.value.activeGroup;
        return active?.id === group.id;
    }

    /**
     * Finds the first group whichs meets the predicate.
     * @param predicate the predicate to test.
     * @throws {ReferenceError} if `predicate` is `null` | `undefined`.
     * @returns An `EditorGroup` object or `null`
     */
    findGroup(predicate: Predicate<EditorGroup>): EditorGroup | undefined {
        requireNonNull(predicate, 'predicate');

        return this.listGroups().find(predicate);
    }

    /**
     * Finds all the groups whichs meets the predicate.
     * @param predicate the predicate to test.
     * @throws {ReferenceError} if `predicate` is `null` | `undefined`.
     * @returns An array of `EditorGroup` objects.
     */
    findGroups(predicate: Predicate<EditorGroup>): EditorGroup[] {
        requireNonNull(predicate, 'predicate');
        return this.listGroups().filter(predicate);
    }

    /**
     * Finds the group with the given id.
     * @param id the id of the group
     * @returns the group or undefined.
     */
    findGroupById(id: string): EditorGroup | undefined {
        requireNonNullString(id, 'id');
        return this.groups.get(id);
    }

    /**
     * Opens the resource with the right editor if it's a File resource
     * and set it has the new active resource of the editor.
     *
     * If the resource is a folder, this method will only set it has the new
     * active resource.
     *
     * @param file the resource.
     * @param options open options.
     * @throws {ReferenceError} if resource is null or undefined.
     */
    async open(
        file: FileEntry | URI | string,
        options?: OpenOptions
    ): Promise<void> {
        requireNonNull(file, 'file');

        const entry = this.fs.find(file) as FileEntry;

        await this.fs.readFile(entry);

        let group: EditorGroup;
        const editorGroups = this.listGroups();
        options = options || {};
        if (options.openToSide) {
            group = this.createGroup();
        } else {
            // tslint:disable-next-line: max-line-length
            group =
                options.openInGroup ||
                editorGroups.find(g => g.contains(entry)) || // open with an exising group containing the resource
                editorGroups.find(g => this.isActiveGroup(g)) || // open with the active group
                editorGroups.find(_ => true) || // open with any group
                this.createGroup(); // open with a new group
        }
        this.groups.set(group.id, group);
        this.editorGroups.next(this.listGroups());
        this.onDidBeforeOpenFile.next(entry);
        await group.open(entry, options);
    }

    /**
     * Closes the resource from all the editor groups.
     * @param file the resource to close.
     * @throws {ReferenceError} if resource is null or undefined.
     */
    async close(file: FileEntry | string): Promise<void> {
        requireNonNull(file, 'file');
        const groups = this.findGroupsContaining(file);
        if (groups.length) {
            for (const group of groups) {
                group.close(file);
            }
        }
    }

   /** Closes all the groups. */
    async closeAll(): Promise<void> {
        let groups = this.listGroups();
        while (groups.length !== 0) {
            await groups[0].closeAll();
            groups = this.listGroups();
        }
        this.editorGroups.next(groups);
        this.state.next({
            activeFile: undefined,
            activeEditor: undefined,
            activeGroup: undefined,
            visibleEditors: [],
        });
    }

    /** Saves the file on the disk. */
    async save(file: FileEntry): Promise<void> {
        requireNonNull(file, 'file');

        this.onDidBeforeSaveFile.next(file);
        await this.fs.writeFile(file);
        this.onDidAfterSaveFile.next(file);
    }

    /** Saves unsaved documents */
    async saveAll(): Promise<void> {
        const files: FileEntry[] = [];
        this.listGroups().forEach(group => {
           group.files.forEach(file => {
               if (file.changed) {
                   files.push(file);
               }
           });
        });
        for (const e of files) {
            await this.save(e);
        }
    }

    /**
     * Opens a confirm dialog.
     * @param options confirm options.
     * @returns A promise that resolves once the dialog is disposed.
     */
    async confirm(options: ConfirmOptions): Promise<boolean> {
        return this.dialog.confirmAsync(options);
    }

    private async closeGuardHandler(
        _: EditorGroup,
        file: FileEntry
    ): Promise<boolean> {
        const changed = this.shouldConfirmClose(file);
        const options: ConfirmOptions = {
            title: 'Do you want to close \'' + file.name + '\'?',
            message: 'Your changes will be lost if you don\'t save them.',
            buttons: [{ id: 'save', title: 'Save', role: 'custom' }],
            okTitle: 'Don\'t Save',
            noTitle: 'Cancel'
        };

        let confirmed: any = false;
        // tslint:disable-next-line: no-conditional-assignment
        if (!changed || (confirmed = await this.confirm(options))) {
            if (confirmed === 'save') {
                await this.save(file);
            }
            this.onDidBeforeCloseFile.next(file);
            return true;
        }
        return false;
    }

    private openHandler(
        group: EditorGroup,
        editor: Editor,
        file: FileEntry,
    ): void {
        this.groups.set(group.id, group);
        this.editorGroups.next(this.listGroups());
        this.fs.readFile(file);
        const { visibleEditors } = this.state.value;
        this.state.next({
            activeGroup: group,
            activeEditor: editor,
            activeFile: file,
            visibleEditors: [
                editor,
                ...visibleEditors.filter(e => !e.equals(editor))
            ]
        });
        this.onDidAfterOpenFile.next(file);
    }

    private closeHandler(
        group: EditorGroup,
        closedFile: FileEntry,
        nextFile?: FileEntry
    ): void {
        if (group.isEmpty) {
            this.groups.delete(group.id);
        }
        if (!this.findGroupsContaining(closedFile).length) {
            this.fs.markAsClosed(closedFile);
        }
        this.editorGroups.next(this.listGroups());
        this.state.next({
            activeEditor: undefined,
            activeFile: undefined,
            activeGroup: undefined,
            visibleEditors: []
        });
        if (nextFile) {
            this.open(nextFile, {
                openInGroup: group
            });
        } else {
            const randomGroup = this.findGroup(g => !g.isEmpty);
            if (randomGroup && randomGroup.activeFile) {
                this.open(randomGroup.activeFile, {
                    openInGroup: randomGroup
                });
            }
        }
        this.onDidAfterCloseFile.next(closedFile);
    }

    private createGroup(): EditorGroup {
        return new EditorGroup(
            this.openHandler.bind(this),
            this.closeHandler.bind(this),
            this.closeGuardHandler.bind(this),
            this.openers,
            () => this.state.value
        );
    }

    private listGroups(): EditorGroup[] {
        return Array.from(this.groups.values());
    }

    private findGroupsContaining(file: FileEntry | string): EditorGroup[] {
        return this.findGroups(group => {
            return group.contains(file);
        });
    }

    private shouldConfirmClose(file: FileEntry): boolean {
        return (
            file.changed &&
            this.findGroups(group => {
                return group.contains(file);
            }).length === 1
        );
    }
}
