import { defineWebComponent, IWebComponent, WebComponentTypes } from '../../web-components';

export interface MathLive extends IWebComponent {
  myproperty: string;
}

export const MathLiveComponentDefinition = defineWebComponent({
    type: WebComponentTypes.form,
    name: 'MathLive',
    icon: 'assets/images/components/forms/math-live/math-live.svg',
    selector: 'wc-math-live',
    description: 'REMPLACEZ CE TEXTE PAR UNE DESCRIPTION DE VOTRE COMPOSANT',
    schema: {
        $schema: 'http://json-schema.org/draft-07/schema',
        type: 'object',
        properties: {}
    }
});
