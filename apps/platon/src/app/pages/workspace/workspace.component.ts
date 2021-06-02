import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { fadeInAnimation } from 'angular-animations';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.scss'],
  animations: [fadeInAnimation()]
})
export class WorkspaceComponent implements OnInit, OnDestroy {
    subscription?: Subscription;

    animate = false;
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
            title: 'Resources',
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

    constructor(
        private readonly router: Router,
        private readonly changeDetector: ChangeDetectorRef,
    ) {}

    ngOnInit() {
        this.subscription = this.router.events.pipe(
            filter(e => e instanceof NavigationStart)
        ).subscribe(() => {
            this.animate = true;
            this.changeDetector.detectChanges()
            setTimeout(() => {
                this.animate = false;
            }, 1000)
        });
    }

    ngOnDestroy() {
        this.subscription?.unsubscribe();
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
