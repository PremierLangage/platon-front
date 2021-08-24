import { Injectable, OnDestroy, ViewContainerRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompilerService } from '@mcisse/nge/services';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';

const RENDERERS: any = {
    'A1': () => import(
        /* webpackChunkName: "A1" */
     './a1/a1.module'
    ).then(m => m.A1Module),
    'A2': () => import(
        /* webpackChunkName: "A2" */
        './a2/a2.module'
    ).then(m => m.A2Module),
}

const ACTIVITIES: Activity[] = [
    {
        id: 1,
        type: 'A1',
        title: 'Activité 1',
        exercises: [
            { id: 'e1', title: 'E1 ....' },
            { id: 'e2', title: 'E2 ....' }
        ]
    },

    {
        id: 2,
        type: 'A2',
        title: 'Activité 2',
        exercises: [
            { id: 'e1', title: 'E1 ....' },
            { id: 'e2', title: 'E2 ....' }
        ]
    }
]

@Injectable()
export class ActivityPresenter implements OnDestroy {
    private readonly subscriptions: Subscription[] = [];
    private readonly context = new BehaviorSubject<Context>(this.defaultContext);

    get defaultContext(): Context {
        return {
            state: 'LOADING'
        };
    }

    get contextChange(): Observable<Context> {
        return this.context.asObservable();
    }

    constructor(
        private readonly activatedRoute: ActivatedRoute,
        private readonly compilerService: CompilerService,
    ) {

        this.subscriptions.push(
            this.activatedRoute.params.subscribe(params => {
                this.onChangeRoute(Number.parseInt(params.id + '', 10));
            })
        );
    }

    ngOnDestroy() {
        this.subscriptions.forEach(s => s.unsubscribe());
    }

    onChangeRoute(id: number) {
        setTimeout(() => {
            this.context.next({
                state: 'READY',
                activity: ACTIVITIES.find(e => e.id === id)
            });
        }, 1000);
    }

    async renderActivity(container: ViewContainerRef) {
        const activity = this.context.value.activity!;
        const module = await RENDERERS[activity.type]();
        return this.compilerService.render({
            type: module,
            container
        });
    }
}

interface Exercise {
    id: string;
    title: string;
}

interface Activity {
    id: number;
    title: string;
    type: 'A1' | 'A2' | 'A3',
    exercises: Exercise[];
}

interface Context {
    state: 'LOADING' | 'READY' | 'SERVER_ERROR' | 'NOT_FOUND' | 'UNAUTHORIZED';
    activity?: Activity;
}
