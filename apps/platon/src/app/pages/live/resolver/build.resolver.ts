import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from "@angular/router";
import { Live, LiveAction, LiveService } from "@platon/feature/workspace";
import { lastValueFrom, Observable } from "rxjs";


@Injectable()
export class LiveBuildResolver implements Resolve<LiveAction> {

    private id!: number;

    constructor(
        private readonly liveService: LiveService,
        private readonly router: Router
    ) { }

    async resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        this.id = Number.parseInt(route.params.id + '', 10);
        const [live] = await Promise.all([
            lastValueFrom(this.liveService.build(this.id))
        ]);
        if (live.env) {
            this.router.navigateByUrl(`/live/${this.id}/process/${live.env}`, { replaceUrl: true });
        } else {
            this.router.navigateByUrl('/', { replaceUrl: true });
        }
        return live;
    }

}
