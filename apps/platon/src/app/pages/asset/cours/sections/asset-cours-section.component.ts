import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";
import { AssetCoursPresenter } from "../asset-cours-presenter";
import { CoursSectionContent } from "../asset-cours.model";

import EditorJS from "@editorjs/editorjs";

declare var Header: any;
declare var List: any;
declare var SimpleImage: any;

@Component({
    selector: 'app-asset-cours-section',
    templateUrl: './asset-cours-section.component.html',
    styleUrls: ['./asset-cours-section.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AssetCoursSectionComponent implements OnInit, OnDestroy {
    private readonly subscriptions: Subscription[] = [];

    private id!: number;
    section?: CoursSectionContent;

    editor?: EditorJS;

    constructor(
        private readonly presenter: AssetCoursPresenter,
        private readonly activatedRoute: ActivatedRoute,
        private readonly changeDetectorRef: ChangeDetectorRef,
    ) {
        this.subscriptions.push(
            this.activatedRoute.params.subscribe(params => {
                this.id =  Number.parseInt(params.id + '', 10);
            })
        );
    }

    ngOnInit(): void {
        this.subscriptions.push(
            this.presenter.contextChange.subscribe(async context => {
                this.section = context.asset?.content?.sections[this.id] || undefined;
                if (this.section?.content) {
                    await this.loadEditorJs(this.section);
                }
                this.changeDetectorRef.markForCheck();
            })
        );
    }

    ngOnDestroy(): void {
        this.subscriptions.forEach(s => s.unsubscribe());
        this.editor?.destroy();
    }

    private async loadEditorJs(section: CoursSectionContent): Promise<void>{
        this.editor = new EditorJS({
            holder: 'editor-js',
            tools: {
                header: {
                    class: Header,
                },
                list: {
                    class: List
                },
                image: {
                    class: SimpleImage
                }
            },
            readOnly: true,
        });
        this.editor.isReady.then(async () => {
            await this.editor?.blocks.render(section.content);
        })
    }
}
