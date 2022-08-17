import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit, TemplateRef } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { CardDisplay, CardItem } from "@platon/shared/ui/card";
import { NzModalRef, NzModalService } from "ng-zorro-antd/modal";
import { Subscription } from "rxjs";
import { AdminCoursPresenster } from "./admin-cours-presenter";


@Component({
    selector: 'app-admin-cours',
    templateUrl: './admin-cours.component.html',
    styleUrls: [
        './admin-cours.component.scss',
        '../admin.component.scss'
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [AdminCoursPresenster]
})
export class AdminCoursComponent implements OnInit, OnDestroy {
    private readonly subscriptions: Subscription[] = [];

    context = this.presenter.defaultContext;

    display: CardDisplay = 'row';

    creation: boolean = false;
    name: string = '';

    constructor(
        private modal: NzModalService,
        private readonly presenter: AdminCoursPresenster,
        private readonly changeDetectorRef: ChangeDetectorRef,
        private readonly activatedRoute: ActivatedRoute,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.subscriptions.push(
            this.presenter.contextChange.subscribe(context => {
                this.context = context;
                this.changeDetectorRef.markForCheck();
            })
        );
        this.presenter.refresh();
    }

    ngOnDestroy(): void {
        this.subscriptions.forEach(s => s.unsubscribe());
    }

    didCreate(title: TemplateRef<{}>, content: TemplateRef<{}>, footer: TemplateRef<{}>): void {
        this.modal.create({
            nzTitle: title,
            nzContent: content,
            nzFooter: footer,
            nzMaskClosable: false,
            nzClosable: false,
            nzComponentParams: {
              value: 'Template Context'
            },
            nzOnOk: () => console.log('Click ok')
          });
    }

    didCreateClose(modelRef: NzModalRef): void {
        this.creation = true;
        setTimeout(() => {
            this.creation = false;
            modelRef.destroy();
        }, 1000);
    }

    async didCreateOk(modelRef: NzModalRef): Promise<void> {
        this.creation = true;
        const name = this.name;
        const succed: boolean = await this.presenter.create(name);
        this.creation = false;
        modelRef.destroy();
        if (succed) {
            this.router.navigate(['detail', name], {
                relativeTo: this.activatedRoute
            });
        }
    }

    getItems(): CardItem[] | undefined {
        return this.context.assets?.results.map<CardItem>((asset, index) => {
            return {
                title: asset.name,
                description: asset.name,
                path: ['detail', asset.name]
            }
        });
    }

}
