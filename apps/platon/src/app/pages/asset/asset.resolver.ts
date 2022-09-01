import { Injectable } from "@angular/core";
import { ActivatedRoute, ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from "@angular/router";
import { Asset, AssetService } from "@platon/feature/workspace";
import { BehaviorSubject, catchError, lastValueFrom, Observable } from "rxjs";


@Injectable()
export class AssetResolver implements Resolve<Asset> {

    private readonly path = new BehaviorSubject<Array<Link>>(this.defaultPath);
    private _path!: string[];

    get defaultPath(): Array<Link> {
        return [];
    }

    get pathChange(): Observable<Array<Link>> {
        return this.path.asObservable();
    }

    constructor(
        private readonly assetService: AssetService,
    ) {
        this._path = [];
    }

    addToPath(type: LinkType, name: string) {
        this._path.push(name);

        let p = this.path.value || [];
        let path: string[] = [];
        this.path.value.forEach(p => {
            path.push(p.type);
            path.push(p.name);
        })
        path.push(type);
        path.push(name);
        p.push({
            type: type,
            name: name,
            path: path
        });

        this.path.next(p);
    }

    popToPath(): void {
        this._path.pop();
        let p = this.path.value || [];
        p.pop();
        this.path.next(p);
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Asset> {
        this.addToPath(
            route.data.type,
            route.params.name
        );
        return this.assetService.getByPath(this._path);
    }

}

export declare type LinkType =
    'cours' |
    'activity' |
    'exersice' |
    'section'
    ;

export interface Link {
    type: LinkType;
    name: string;
    path: string[];
}


