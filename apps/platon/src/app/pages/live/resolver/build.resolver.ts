import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from "@angular/router";
import { Live, LiveService } from "@platon/feature/workspace";
import { lastValueFrom, Observable } from "rxjs";


@Injectable()
export class LiveBuildResolver implements Resolve<Live> {

    private id!: number;

    constructor(
        private readonly liveService: LiveService,
    ) { }

    async resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<Live> {
        this.id = Number.parseInt(route.params.id + '', 10);
        const [live] = await Promise.all([
            lastValueFrom(this.liveService.build(this.id))
        ]);
        return live;
    }

}
