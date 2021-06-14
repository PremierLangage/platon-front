import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PresenterState } from '../circle.presenter';

@Component({
    selector: 'app-circle-header',
    templateUrl: './circle-header.component.html',
    styleUrls: ['./circle-header.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CircleHeaderComponent implements OnInit {
    readonly actions: MenuAction[] = [];

    @Input() state!: PresenterState;

    @Output() didAcceptInvitation = new EventEmitter();
    @Output() didDeclineInvitation = new EventEmitter();
    @Output() didChangeWatchingState = new EventEmitter();

    changingWatchingState = false;

    ngOnInit(): void {
        if (this.state.isMember) {
            this.actions.push(
                {
                    id: 'menu-create-exercise',
                    title: 'Créer un exercice',
                    icon: 'article',
                    link: ['/workspace', 'create-exercise']
                },
                {
                    id: 'menu-create-activity',
                    title: 'Créer une activité',
                    icon: 'assessment',
                    link: ['/workspace', 'create-activity']
                }
            );
        }
    }
}

interface MenuAction {
    id: string;
    icon: string;
    title: string;
    link: string | any[];
}
