import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Live, LiveService } from "@platon/feature/workspace";
import { Observable } from "rxjs";


@Injectable()
export class LiveRetrieveResolver implements Resolve<Live> {

    private id!: number;
    private session!: string;

    constructor(
        private liveService: LiveService
    ) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Live | Observable<Live> | Promise<Live> {
        this.id = Number.parseInt(route.params.id + '', 10);
        this.session = route.params.session;
        return this.liveService.get(this.id, this.session);
    }

}
