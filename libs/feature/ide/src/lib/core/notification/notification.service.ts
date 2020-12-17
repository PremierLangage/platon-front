import { Injectable, OnDestroy } from '@angular/core';
import { NgEventBus } from 'ng-event-bus';
import {
    BehaviorSubject,
    Observable,
    PartialObserver,
    Subscription,
} from 'rxjs';
import { ServerError } from '@platon/core/config';
import {
    Notification,
    ErrorNotification,
    NOTIFICATION_EVENT_CHANNEL,
} from './notification';

@Injectable()
export class NotificationService implements OnDestroy {
    private readonly subscriptions: Subscription[] = [];
    private readonly subject = new BehaviorSubject<Notification[]>([]);

    private notifications: Notification[];

    get count(): number {
        return this.notifications.length;
    }

    constructor(private readonly eventBus: NgEventBus) {
        this.notifications = [];
        this.subscriptions.push(
            this.eventBus.on(NOTIFICATION_EVENT_CHANNEL).subscribe((e) => {
                this.notifications.splice(0, 0, e.data as Notification);
                this.subject.next(this.notifications);
            })
        );
    }

    ngOnDestroy() {
        this.subscriptions.forEach((e) => e.unsubscribe());
    }

    clear() {
        this.notifications = [];
        this.subject.next([]);
    }

    publish(notification: Notification) {
        this.eventBus.cast(NOTIFICATION_EVENT_CHANNEL, notification);
    }

    asObservable(): Observable<Notification[]> {
        return this.subject.asObservable();
    }

    subscribe(obsever: PartialObserver<Notification[]>) {
        return this.subject.subscribe(obsever);
    }

    catch(error: any) {
        if (error == null) {
            return;
        }

        if (error instanceof Error) {
            this.publish(
                new ErrorNotification(error.message, 'error', error.stack)
            );
        } else if (!(error instanceof ServerError)) {
            this.publish(
                new ErrorNotification(
                    JSON.stringify(error),
                    'error',
                    new Error().stack
                )
            );
        }
    }
}
