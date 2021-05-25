import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthUser } from '@platon/core/auth';
import { Circle, Member, ResourceService, TagsService } from '@platon/feature/workspace';
import { zoomInOnEnterAnimation } from 'angular-animations';
import { take } from 'rxjs/operators';
import {Location} from '@angular/common';
@Component({
    selector: 'app-ws-create-circle',
    templateUrl: './create-circle.component.html',
    styleUrls: ['./create-circle.component.scss'],
    // tslint:disable-next-line: no-host-metadata-property
    host: {
        '[@zoomInOnEnter]': 'true',
    },
    animations: [zoomInOnEnterAnimation({ duration: 300 })],
})
export class CreateCircleComponent implements OnInit {
    status: string[] = ['process', 'wait', 'wait'];
    parent?: Circle;

    step = 0;

    members: Member[] = [];

    formStep1 = new FormGroup({
        name: new FormControl('', [Validators.required]),
        parent: new FormControl({ value: '', disabled: true }, [Validators.required]),
        description: new FormControl('', [Validators.required])
    });

    formStep3 = new FormGroup({
        tags: new FormControl([], [Validators.required]),
    });

    tags: any[] = [];

    get canContinue() {
        switch (this.step) {
            case 0:
                return this.formStep1.valid;
            case 2:
                return this.formStep3.valid;
        }
        return true;
    }

    constructor(
        private readonly router: Router,
        private readonly location: Location,
        private readonly tagsService: TagsService,
        private readonly activatedRoute: ActivatedRoute,
        private readonly resourceService: ResourceService,
    ) {}

    async ngOnInit() {
        const parent = await this.resourceService.findById({
            id: Number.parseInt(this.activatedRoute.snapshot.queryParamMap.get('parent') || '', 10),
            type: 'CIRCLE',
        }).pipe(take(1)).toPromise();

        if (parent != null) {
            this.formStep1.patchValue({
                parent: parent.name
            });
        }
        this.tags = await this.tagsService.cascader().toPromise();
    }

    dismiss() {
        this.location.back();
    }

    prevStep() {
        this.step--;
        this.onChangeStep();
    }

    nextStep() {
        const { name, description } = this.formStep1.value;
        const { tags } = this.formStep3.value;
        if (this.step === 2) {
            this.resourceService.createCircle({
                name,
                tags,
                description,
                members: this.members,
                parent: this.getParentQueryParam()
            }).then((circle) => {
                this.router.navigate(['/workspace/circle', circle.id], {
                    relativeTo: this.activatedRoute,
                    replaceUrl: true
                });
            }).catch(error => {
                console.error(error);
            })
        } else {
            this.step++;
            this.onChangeStep();
        }
    }



    removeMember(member: Member) {
        this.members = this.members.filter(e => e.id !== member.id);
    }

    addMembers(users: AuthUser[]) {
        this.members = this.members.concat(
            users.map((e) => {
                return {
                    id: e.id,
                    username: e.username,
                    lastName: e.lastName,
                    firstName: e.firstName,
                    isAdmin: e.isAdmin,
                    circleId: -1,
                } as Member;
            })
        );
    }

    private onChangeStep() {
        for (let i = 0; i < this.status.length; i++) {
            this.status[i] = 'wait';
            if (this.step > i) {
                this.status[i] = 'finish';
            }
        }
        this.status[this.step] = 'process';
    }

    private getParentQueryParam(): number {
        return Number.parseInt(this.activatedRoute.snapshot.queryParamMap.get('parent') || '', 10);
    }
}
