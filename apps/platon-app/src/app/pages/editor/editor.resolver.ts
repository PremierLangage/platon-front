import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from "@angular/router";
import { Circle, CircleService, FileService, FileTree, Resource, ResourceService } from "@platon/feature/workspace";


@Injectable()
export class EditorResolver implements Resolve<FileTree> {


    constructor(
        private readonly router: Router,
        private readonly resourceService: ResourceService,
        private readonly circleService: CircleService,
        private readonly fileService: FileService
    ) { }

    async resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Promise<FileTree> {
        const repository = await this.load(
            Number.parseInt(route.params['id'] + '', 10),
            route.data['type']
        )
        if (!repository) this.router.navigate(['/']);
        return await this.fileService.tree(repository).toPromise() as Required<FileTree>;
    }

    async load(id: number, type: string): Promise<Circle | Resource> {
        if (type === 'circle') {
            return await this.circleService.findById(id).toPromise() as Required<Circle>;
        } else {
            return await this.resourceService.findById(id).toPromise() as Required<Resource>;
        }
    }

}
