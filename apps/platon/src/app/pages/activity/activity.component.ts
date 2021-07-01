import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AuthService } from '@platon/core/auth';
import { LayoutTab } from '../../shared/layout';

import { name, id, exercices_id } from '../../exercises/activity.json';

@Component({
    selector: 'app-activity',
    templateUrl: 'activity.component.html',
    styleUrls: ['./activity.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})

export class ActivityComponent implements OnInit {
    readonly actions: MenuAction[] = [];

    public nom;
    public num;
    public exercises_list;

    constructor(private readonly authService: AuthService) {
        this.nom = name;
        this.num = id;
        this.exercises_list = exercices_id;
    }

    readonly tabs: LayoutTab[] = [
        {
            id: 'menu-playexo',
            title: 'Play',
            link: ['/exercice']
        },

        {
            id: 'menu-dashboard',
            title: 'Dashboard',
            link: ['/student-dashboard']
        },
        {
            id: 'menu-group-dashboard',
            title: 'Dashboard Group',
            link: ['/group-dashboard']
        },
    ];

    async ngOnInit() {
        const user = (await this.authService.ready())!;

        if (user.isAdmin) {
            this.actions.push({
                id: 'menu-playexo',
                title: 'Play',
                icon: 'play_circle_outline',
                link: ['/exercise']
            },
            {
                id: 'menu-dashboard',
                title: 'Dashboard',
                icon: 'dashboard',
                link: ['/student-dashboard']
            },
            {
                id: 'menu-group-dashboard',
                title: 'Dashboard Group',
                icon: 'description',
                link: ['/group-dashboard']
            },
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
