import { Location } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '@platon/core/auth';
import { Circle, CircleService, ResourceFileService, ResourceService } from '@platon/feature/workspace';
import { zoomInOnEnterAnimation } from 'angular-animations';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
    selector: 'app-create-exercise',
    templateUrl: './create-exercise.component.html',
    styleUrls: ['./create-exercise.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    // tslint:disable-next-line: no-host-metadata-property
    host: {
        '[@zoomInOnEnter]': 'true',
    },
    animations: [zoomInOnEnterAnimation({ duration: 300 })],
})
export class CreateExerciseComponent implements OnInit {
    circles: Circle[] = [];

    selectedCircle?: Circle;
    selectedTopics: string[] = [];
    selectedLevels: string[] = [];

    loading = true;
    creating = false;

    formInfos = new FormGroup({
        name: new FormControl('', [Validators.required]),
        desc: new FormControl('', [Validators.required])
    });

    get topics(): string[] {
        return this.selectedCircle?.topics || [];
    }

    get levels(): string[] {
        return this.selectedCircle?.levels || [];
    }

    constructor(
        private readonly router: Router,
        private readonly location: Location,
        private readonly authService: AuthService,
        private readonly circleService: CircleService,
        private readonly activatedRoute: ActivatedRoute,
        private readonly messageService: NzMessageService,
        private readonly resourceService: ResourceService,
        private readonly changeDetectorRef: ChangeDetectorRef,
        private readonly resourceFileService: ResourceFileService,
    ) { }

    async ngOnInit() {
        this.loading = true;

        const user = (await this.authService.ready())!;
        const [circles, personal] = await Promise.all([
            this.circleService.findWatchedBy(user.username).toPromise(),
            this.circleService.findUserPersonal().toPromise(),
        ]);
        this.circles = [personal, ...circles.results];

        this.loading = false;
        this.changeDetectorRef.markForCheck();
    }

    dismiss(): void {
        this.location.back();
    }

    async onSubmit() {
        try {
            const { name, desc } = this.formInfos.value;
            this.creating = true;
            const resource = await this.resourceService.createResource({
                name,
                desc,
                type: 'EXERCISE',
                //status: 'DRAFT',
                circle: this.selectedCircle!.id,
                levels: this.selectedLevels,
                topics: this.selectedTopics,
            }).toPromise();

            await this.resourceFileService.create({
                resource,
                files: {
                    'main.pl': { type: 'file', content: '' },
                    'resource-info.json': {
                        type: 'file',
                        content: JSON.stringify({
                            name,
                            desc,
                            type: 'EXERCISE',
                            dependencies: {}
                        }, null, 4)
                    }
                }
            }).toPromise();

            this.router.navigate(['/resource', resource.id], {
                relativeTo: this.activatedRoute,
                replaceUrl: true
            });
        } catch (error) {
            console.error(error);
            this.messageService.error(
                'Une erreur est survenue lors de cette action, veuillez réessayer un peu plus tard !'
            );
            this.creating = false;
            this.changeDetectorRef.markForCheck();
        }
    }
}
