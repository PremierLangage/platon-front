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
            id: 'menu-create-circle',
            title: 'Créer un cercle',
            icon: 'group_work',
            link: ['/create-cercle']
        },
        {
            id: 'menu-create-model',
            title: 'Créer un modèle',
            icon: 'widgets',
            link: ['/create-resource']
        },
        {
            id: 'menu-create-exercise',
            title: 'Créer un exercice',
            icon: 'article',
            link: ['/create-resource']
        },
        {
            id: 'menu-create-activity',
            title: 'Créer une activité',
            icon: 'assessment',
            link: ['/create-resource']
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
