import { Component } from '@angular/core';
import { WebComponentDefinition } from '../web-components';

@Component({
  selector: 'wc-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.scss']
})
export class DocsComponent {
    definition!: WebComponentDefinition;
    get remoteUrl() {
        const type = this.definition.type;
        const name = this.definition.selector.replace('wc-', '');
        return `https://github.com/PremierLangage/platon-front/blob/master/libs/features/web-components/src/lib/${type}s/${name}`;
    }
}
