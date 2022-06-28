import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: 'ws-git-panel',
    templateUrl: './git-panel.component.html',
    styleUrls: ['./git-panel.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GitPanelComponent {

    private repo!: Repository;

    _id?: number;
    _name?: string;


    @Input()
    set repository(value: Repository | undefined) {
        this._id = value?.id;
        this._name = value?.name;
    }

    @Output() didChangeBranch = new EventEmitter<void>();

    @Input() path?: string[];

    constructor(
        private readonly changeDetectionRef: ChangeDetectorRef
    ) {

    }

    set setPath(value: string[]) {
        this.path = value;
    }

    async baseUrl(): Promise<string> {
        return `/resource/${this._id}/code`;
    }

}

interface Mode {
    state: 'LOADING' | 'READY' | 'EDIT';
}

interface Repository {
    id: number;
    name: string;
    permissions: {
        write: boolean;
        delete: boolean;
    }
    //path: string[];
}
