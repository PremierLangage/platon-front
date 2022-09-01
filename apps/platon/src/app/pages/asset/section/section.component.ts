import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { AuthService } from "@platon/core/auth";
import { Asset, CoursDetail, CoursService } from "@platon/feature/workspace";
import { lastValueFrom, Subscription } from "rxjs";
import { AssetEvents } from "../asset-events.models";
import { AssetResolver } from "../asset.resolver";


import EditorJS, { OutputData } from "@editorjs/editorjs";

declare var Header: any;
declare var List: any;
declare var SimpleImage: any;

@Component({
    selector: 'app-asset-section',
    templateUrl: './section.component.html',
    styleUrls: ['./section.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SectionComponent extends AssetEvents implements OnInit, OnDestroy {
    private readonly subscriptions: Subscription[] = [];

    private id!: number;
    private cours!: CoursDetail;

    section?: Section;
    editor?:  EditorJS;

    constructor(
        private readonly authService: AuthService,
        private readonly coursService: CoursService,
        private readonly activatedRoute: ActivatedRoute,
        private readonly changeDetectorRef: ChangeDetectorRef,
    ) {
        super();
        this.subscriptions.push(
            this.activatedRoute.params.subscribe(params => {
                this.id = Number.parseInt(params.id + '', 10);
            })
        );
    }

    ngOnInit(): void {
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
        this.activatedRoute.parent?.data.subscribe(async data => {

            const [ user, cours ] = await Promise.all([
                this.authService.ready(),
                lastValueFrom(this.coursService.getByName(data.asset.name))
            ]);

            this.cours = cours;
            this.section = cours.content.sections[this.id];
            this.editor?.isReady.then(() => {
                this.editor?.blocks.render(cours.content.sections[this.id].content)
            });
            this.changeDetectorRef.markForCheck();
        }).unsubscribe();
    }

    ngOnDestroy(): void {
        this.subscriptions.forEach(s => s.unsubscribe());
        this.editor?.destroy();
    }
}

export interface Section {
    position: number;
    name: string;
    content: OutputData;
}
