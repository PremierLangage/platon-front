import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Live, LiveService } from "@platon/feature/workspace";
import { lastValueFrom } from "rxjs";


@Injectable()
export class LiveProcessResolver implements Resolve<Live> {

    private id!: number;
    private env!: string;

    constructor(
        private readonly liveService: LiveService
    ) { }

    async resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        this.id = Number.parseInt(route.params.id + '', 10);
        this.env = route.params.env;
        const [live] = await Promise.all([
            lastValueFrom(this.liveService.process(this.id, this.env))
        ]);
        return live;
    }

}
