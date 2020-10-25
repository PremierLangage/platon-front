import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { Injectable, NgZone, TemplateRef, ViewContainerRef } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { fromEvent, Subscription } from 'rxjs';
import { filter, take } from 'rxjs/operators';
import { ConfirmComponent, ConfirmOptions } from './confirm/confirm.component';
import { PrompOptions, PromptComponent } from './prompt/prompt.component';


@Injectable({
  providedIn: 'root'
})
export class DialogService {
    private overlayRef?: OverlayRef;
    private subscription?: Subscription;

    constructor(
        private readonly zone: NgZone,
        private readonly dialog: MatDialog,
        private readonly overlay: Overlay,
        private readonly snackbar: MatSnackBar,
    ) {}

    promptAsync(options: PrompOptions) {
        const ref: MatDialogRef<PromptComponent, PrompOptions> = this.dialog.open(PromptComponent, {
            hasBackdrop: true,
            disableClose : true,
            data: options,
        });
        return new Promise<PrompOptions>(resolve => {
            this.zone.run(() => {
                let subscription: Subscription;
                subscription = ref.afterClosed().subscribe(value => {
                    subscription.unsubscribe();
                    resolve(value);
                });
            });
        });
    }

    confirmAsync(options: ConfirmOptions) {
        const ref: MatDialogRef<ConfirmComponent, any> = this.dialog.open(ConfirmComponent, {
            hasBackdrop: true,
            disableClose : true,
            data: options,
            autoFocus: false,
            minWidth: '400px',
            minHeight: '100px'
        });
        return new Promise<any>((resolve) => {
            this.zone.run(() => {
                let subscription: Subscription;
                subscription = ref.afterClosed().subscribe(value => {
                    subscription.unsubscribe();
                    resolve(value);
                });
            });
        });
    }

    contextMenu<T>(options: IContextMenuOptions<T>): void {
        const { event, templateRef, containerRef, data } = options;

        this.closeContextMenu();

        const { x, y } = event;
        const positionStrategy = this.overlay.position()
            .flexibleConnectedTo({ x, y })
            .withPositions([
                {
                    originX: 'end',
                    originY: 'bottom',
                    overlayX: 'end',
                    overlayY: 'top',
                }
            ]);

        this.overlayRef = this.overlay.create({
            positionStrategy,
            scrollStrategy: this.overlay.scrollStrategies.close()
        });

        this.overlayRef.attach(new TemplatePortal(templateRef, containerRef, {
            $implicit: data || {}
        }));

        this.subscription = fromEvent<MouseEvent>(document, 'click')
        .pipe(
            filter(e => {
                const target = e.target as HTMLElement;
                return !!this.overlayRef && !this.overlayRef.overlayElement.contains(target);
            }),
            take(1)
        ).subscribe(this.closeContextMenu.bind(this));
    }

    closeContextMenu(): void {
        // tslint:disable-next-line: no-unused-expression
        this.subscription && this.subscription.unsubscribe();
        if (this.overlayRef) {
            this.overlayRef.dispose();
            this.overlayRef = undefined;
        }
    }

    snack(message: string, config?: MatSnackBarConfig) {
        this.zone.run(() => {
            this.snackbar.open(message, '', {
                duration: 3000,
                ...(config || {})
            });
        });
    }
}

export interface IContextMenuOptions<T> {
    data?: T;
    event: MouseEvent;
    templateRef: TemplateRef<any>;
    containerRef: ViewContainerRef;
}
