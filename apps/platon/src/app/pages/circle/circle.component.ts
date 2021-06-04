import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '@platon/core/auth';
import { CircleService } from '@platon/feature/workspace';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-circle',
    templateUrl: './circle.component.html',
    styleUrls: ['./circle.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CircleComponent implements OnInit, OnDestroy {
    private readonly subscriptions: Subscription[] = [];

    readonly tabs: Tab[] = [
        {
            id: 'tab-overview',
            title: "Vue d'ensemble",
            link: ['overview']
        },

        {
            id: 'tab-resources',
            title: 'Ressources',
            link: ['resources']
        },
        {
            id: 'tab-settings',
            title: 'Paramètres',
            link: ['settings']
        },
    ];

    readonly actions: MenuAction[] = [
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

    constructor(
        private readonly authService: AuthService,
        private readonly circleService: CircleService,
        private readonly changeDetectorRef: ChangeDetectorRef,
    ) { }


    ngOnInit() {}

    ngOnDestroy(): void {
        this.subscriptions.forEach(s => s.unsubscribe());
    }
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
