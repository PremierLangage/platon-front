import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs";
import { AdminCoursDetailPresenter } from "../admin-cours-detail-presenter";

import EditorJS from '@editorjs/editorjs';
import { OutputData } from '@editorjs/editorjs';

declare var Header: any;
declare var List: any;
declare var SimpleImage: any;
declare var ImageTool: any;

@Component({
    selector: 'app-admin-cours-detail-settings',
    templateUrl: './admin-cours-detail-section.component.html',
    styleUrls: ['./admin-cours-detail-section.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminCoursDetailSectionComponent implements OnInit, OnDestroy {
    private readonly subscriptions: Subscription[] = [];
    private id!: number;

    private save: boolean = false;

    private editor: EditorJS = new EditorJS({
        holder: 'editor-js',
        data: {
            blocks: []
        },
        tools: {
            image: {
                class: ImageTool
            },
            header: {
                class: Header
            },
            list: {
                class: List
            }
        },
        onChange: async (api, event) => {
            const data = await api.saver.save();
            this.didChangeSection(data);
        }
    });

    context = this.presenter.defaultContext;

    section !: CoursSection;

    constructor(
        private readonly presenter: AdminCoursDetailPresenter,
        private readonly activatedRoute: ActivatedRoute,
        private readonly changeDetectorRef: ChangeDetectorRef,
        private router: Router,
    ) {

    }

    ngOnInit(): void {
        this.subscriptions.push(
            this.activatedRoute.params.subscribe(params => {
                this.id = Number.parseInt(params.id + '', 10);
                this.section = this.presenter.getSection(this.id);
                this.save = false;
                this.editor.isReady.then(async () => {
                    this.editor.clear();
                    if (this.section.content) {
                        await this.editor.blocks.render(this.section.content);
                    }
                });
                this.changeDetectorRef.markForCheck();
            }),
            this.presenter.contextChange.subscribe(async context => {
                this.context = context;
                this.section = this.presenter.getSection(this.id);
                this.changeDetectorRef.markForCheck();
            }),
        );
    }

    ngOnDestroy(): void {
        this.subscriptions.forEach(s => s.unsubscribe());
        this.editor.destroy();
    }

    didChangeSection(data: any) {
        if (this.save) {
            this.presenter.setSection(this.id, data);
        }
        this.save = true;
    }

}

export interface CoursSection {
    position: number;
    name: string;
    content?: OutputData;
}
