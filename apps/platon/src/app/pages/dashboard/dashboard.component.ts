import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService, AuthUser } from '@platon/core/auth';
import { CardItem } from '@platon/shared/ui/card';
import { SearchBar } from '@platon/shared/ui/search';
import { IntroService } from '@platon/shared/utils';
import { of, Subscription } from 'rxjs';
import { DashboardPresenter } from './dashboard-presenter';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [DashboardPresenter],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit, OnDestroy {
    private readonly subscriptions: Subscription[] = [];

    searchBar: SearchBar<any> =  {
        placeholder: 'Essayez un nom de cours...',
        complete: item => item,
        filterer: {
            run: (_) => of([]),
        },
    }

    context = this.presenter.defaultContext;
    cards?: CardItem[];

    constructor(
        private readonly presenter: DashboardPresenter,
        private readonly changeDetectorRef: ChangeDetectorRef,
        private readonly authService: AuthService,
        private readonly introService: IntroService
    ) { }

    async ngOnInit() {

        await this.authService.ready();

        this.subscriptions.push(
            this.presenter.contextChange.subscribe(context => {
                this.context = context;
                this.cards = context.assets?.results.map<CardItem>((item, index) => {
                    return {
                        title: item.name,
                        description: item.name,
                        path: ['/', 'asset', 'cours', item.name]
                    }
                });
                this.changeDetectorRef.markForCheck();
            })
        );

        await this.presenter.initContext();

        /*
        setTimeout(async () => {
            const intro = await this.introService.create();
            intro.setOptions({
                scrollToElement: true,
                disableInteraction: true,
                showButtons: true,
                showBullets: false,
                showStepNumbers: false,
                doneLabel: 'Terminer',
                nextLabel: 'Suivant',
                skipLabel: 'Terminer',
                prevLabel: 'Précedent',
                steps: [
                    {
                        intro: `L'espace de travail est un espace réservé aux enseignants pour créer des exercices et activités`,
                        element: '#nav-link-workspace'
                    },
                    {
                        intro: `Vous pouvez à tout moment accéder au forum pour poser des questions aux utilisateurs de la plateforme`,
                        element: '#nav-link-forum'
                    },
                    {
                        intro: `La documentation est l'endroit idéal pour comprendre le fonctionnement de la plateforme`,
                        element: '#nav-link-doc'
                    },
                    {
                        intro: `Un espace réservé aux utilisateurs admin de la plateforme`,
                        element: '#nav-link-admin-panel'
                    },

                    {
                        intro: `La barre de navigation de la page courante`,
                        element: 'mat-drawer'
                    }
                ],
            })
            intro.addHints()
            intro.start();
        });
        */
    }

    ngOnDestroy(): void {
        this.subscriptions.forEach(s => s.unsubscribe());
    }

}
