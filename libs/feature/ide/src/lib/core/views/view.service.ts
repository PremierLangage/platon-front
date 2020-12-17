import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { filter } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class ViewService {
    private readonly args = new Map<string, ViewArgs>();
    private readonly calls = new Subject<{
        viewId: string,
        args: ViewArgs
    }>();

    observe(...views: string[]) {
        return this.calls.pipe(
            filter(e => views.includes(e.viewId))
        );
    }

    /**
     *
     * @param viewId
     * @param args
     */
    present(viewId: string, args: ViewArgs): void {
        this.args.set(viewId, args);
        this.calls.next({
            viewId,
            args
        });
    }

    /**
     * Invokes the given `consumer` function with the last arguments passed
     *  to the `present` method for the view identified by the given `viewId`.
     *
     * Note:
     * The arguments will be cleard
     * @param viewId Identifier of a view.
     * @param consumer Consumer function.
     */
    consumeArgs(viewId: string, consumer: (args: ViewArgs) => void) {
        const args = this.args.get(viewId);
        if (args) {
            this.args.delete(viewId);
            consumer(args);
        }
    }
}

interface ViewArgs {
     computeIfVisible: boolean;
     data?: any
}
