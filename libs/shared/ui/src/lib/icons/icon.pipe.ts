import { ComponentPortal } from '@angular/cdk/portal';
import { Pipe, PipeTransform, Injector } from '@angular/core';
import { CodIconComponent } from './codicon/codicon.component';
import { FaIconComponent } from './fa-icon/fa-icon.component';
import { FileIconComponent } from './file-icon/file-icon.component';
import { Icon, ICON_TOKEN } from './icons';
import { ImgIconComponent } from './img-icon/img-icon.component';

@Pipe({
    name: 'icon'
})
export class IconPipe implements PipeTransform {
    constructor(private readonly injector: Injector) {}
    transform(icon: Icon): ComponentPortal<any> {
        switch (icon.type) {
            case 'codicon':
                return new ComponentPortal(CodIconComponent, null, this.createInjector(icon));
            case 'fa':
                return new ComponentPortal(FaIconComponent, null, this.createInjector(icon));
            case 'file':
                return new ComponentPortal(FileIconComponent, null, this.createInjector(icon));
            case 'img':
                return new ComponentPortal(ImgIconComponent, null, this.createInjector(icon));
            default:
                throw new TypeError('unknown icon type "' + icon.type + '"');
        }
    }

    createInjector(icon: Icon): Injector {
        return Injector.create({
            providers: [
                { provide: ICON_TOKEN, useValue: icon }
            ],
            parent: this.injector,
        });
    }
}
