import { Location } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CircleService, CircleTree } from '@platon/feature/workspace';
import { zoomInOnEnterAnimation } from 'angular-animations';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
    selector: 'app-create-circle',
    templateUrl: './create-circle.component.html',
    styleUrls: ['./create-circle.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    // tslint:disable-next-line: no-host-metadata-property
    host: {
        '[@zoomInOnEnter]': 'true',
    },
    animations: [zoomInOnEnterAnimation({ duration: 300 })],
})
export class CreateCircleComponent implements OnInit {
    status: string[] = ['process', 'wait', 'wait', 'wait'];

    tree?: CircleTree;
    parent?: number;

    topics: string[] = [];
    levels: string[] = [];

    selectedTopics: string[] = [];
    selectedLevels: string[] = [];

    formInfos = new FormGroup({
        name: new FormControl('', [Validators.required]),
        opened: new FormControl(false, [Validators.required]),
        description: new FormControl('', [Validators.required])
    });

    loading = true;
    creating = false;

    constructor(
        private readonly router: Router,
        private readonly location: Location,
        private readonly circleService: CircleService,
        private readonly activatedRoute: ActivatedRoute,
        private readonly changeDetectorRef: ChangeDetectorRef,
        private readonly notificationService: NzNotificationService,
    ) { }

    async ngOnInit() {
        const [tree, topics, levels] = await Promise.all([
            this.circleService.tree().toPromise(),
            this.circleService.topics().toPromise(),
            this.circleService.levels().toPromise(),
        ]);

        this.tree = tree;
        this.topics = topics.map(e => e.name);
        this.levels = levels;
        this.loading = false;

        this.changeDetectorRef.markForCheck();
    }

    dismiss(): void {
        this.location.back();
    }

    validate(step: number): boolean {
        switch (step) {
            case 0:
                return !!this.parent;
            case 1:
                return this.formInfos.valid;
            case 2:
                return !!this.selectedTopics.length;
            case 3:
                return !!this.selectedLevels.length;
            default:
                return true;
        }
    }

    onChangeStep(step: number) {
        if (step === 4) {
            const { name, desc, opened } = this.formInfos.value;
            this.creating = true;
            this.circleService.createCircle({
                name,
                desc,
                opened,
                levels: this.selectedLevels,
                topics: this.selectedTopics,
                parent: this.parent!
            })
                .toPromise()
                .then((circle) => {
                    this.router.navigate(['/circle', circle.id], {
                        relativeTo: this.activatedRoute,
                        replaceUrl: true
                    });
                })
                .catch(() => {
                    this.notificationService.error('',
                        'Une erreur est survenue lors de cette action, veuillez réessayer un peu plus tard !'
                    );
                    this.creating = false;
                    this.changeDetectorRef.markForCheck();
                });
        }
    }

    trackByValue(_: number, value: any) {
        return value;
    }
}
