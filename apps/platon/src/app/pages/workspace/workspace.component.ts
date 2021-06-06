import { ChangeDetectionStrategy, Component } from '@angular/core';


@Component({
    selector: 'app-workspace',
    templateUrl: './workspace.component.html',
    styleUrls: ['./workspace.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkspaceComponent {
    readonly tabs: Tab[] = [
        {
            id: 'tab-overview',
            title: "Vue d'ensemble",
            link: ['overview']
        },

        {
            id: 'tab-circles',
            title: 'Cercles',
            link: ['circles']
        },
        {
            id: 'tab-resources',
            title: 'Ressources',
            link: ['resources']
        },
    ];

    readonly actions: MenuAction[] = [
        {
            id: 'tab-resources',
            title: 'Créer un cercle',
            icon: 'group_work',
            link: ['/workspace', 'create-circle']
        },
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
        },
    ];
}

interface Tab {
    id: string;
    title: string;
    link: string | any[];
}

interface MenuAction {
    id: string;
    icon: string;
    title: string;
    link: string | any[];
}
