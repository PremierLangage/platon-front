import { Directive, ViewContainerRef } from '@angular/core'

@Directive({
  selector: '[assetComponent]',
})
export class AssetDirective {

    constructor(
        public viewContainerRef: ViewContainerRef
    ) { }

}
