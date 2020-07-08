import { InjectionToken } from '@angular/core';
import { deepCopy } from '@platon/shared/utils';
import * as jsyaml from 'js-yaml';

export enum WebComponentTypes {
    form = 'form',
    widget = 'widget',
};

/**
 * Configuration metadata that determines how a component should be processed, instantiated, and used at runtime.
 */
export interface WebComponentDefinition {
    /** Icon representing the component */
    icon: string;
    /** Name of the component */
    name: string;
    /** Type of the component */
    type: WebComponentTypes;
    /** Html selector of the component. */
    selector: string;
    /** Briefs description of the component. */
    description: string;
    /** Metadata informations about the properties of the component. */
    properties: Record<string, WebComponentProperty>;
    /** Metadata informations about the`properties` of type object. */
    types?: Record<string, WebComponentProperty>;
}

/**
 * Metadata informations about a web component property.
 */
export interface WebComponentProperty {
    /** Property name */
    name: string;
    /** Property type e.x: string, number, MyInterface... */
    type: any;
    /** Default value of the property. */
    default: any;
    /** Briefs description of the property. */
    description: string;
}

/**
 * Basic representation of a web component model.
 */
export interface WebComponentModel {
    /** Unique identifier of the component. */
    cid: string;
    /** Show current state of the component. */
    debug: boolean;
    /** Html selector of the component. */
    selector: string;
}


/**
 * Keeps a track to the changes that occurs in a web component state `@Input`.
 */
export interface WebComponentState<T> {
    /**
     * The state of the component.
     * The @WebComponent decorator create a getter and a setter during runtime to
     * synchronize the changes and call the methods `onAfterSerialize` (after the getter runs)
     * and `onAfterDeserialize` (after the setter runs).
     */
    state: T;

    /**
     * This method is called immediately after the `state` getter runs with the object that
     * will be returned by the getter.
     * Define this method to handle any additional post validation tasks.
     *
     * @param state The object that will be returned by the getter.
     * @returns the object or a computed version of the object.
     */
    onAfterSerialize?(state: T): T;

    /**
     * A callback method that is invoked immediately after the `state` setter runs.
     * Define this method to handle any additional validation and initialization tasks.
     *
     * Remark:
     * You may need to run Angular change detection at the end of this method
     * to refresh the view.
     */
    onAfterDeserialize(): void;
}

/**
 * Decorator that marks a class as a web component and provides configuration metadata that determines how the component should be processed, instantiated, and used at runtime.
 * @param definition metadata informations about the component.
 */
export function WebComponent(definition: WebComponentDefinition): ClassDecorator {
    return function(target: any) {
        const prototype = target.prototype;
        // DYNAMICALLY DEFINE BACKED FIELD FOR `state` property.
        Object.defineProperty(prototype, '__state__', {
            value: {
                cid: '',
                debug: false,
                selector: definition.selector
            } as WebComponentModel,
            writable: true
        });
        // DYNAMICALLY DEFINE GETTER AND SETTER FOR `state` PROPERTY
        Object.defineProperty(prototype, 'state', {
            get: function () {
                return stateGetter(this, definition);
            },
            set: function(newState: any) {
                stateSetter(this, definition, newState);
            }
        });
        return target;
    }
}

export function stateGetter(instance: any, definition: WebComponentDefinition) {
    const state = instance.__state__;
    Object.keys(definition.properties).forEach(propertyName => {
        const property = definition.properties[propertyName];
        state[propertyName] = instance.__state__[propertyName];
        if (state[propertyName] == null && property.default != null) {
            state[propertyName] = deepCopy(property.default);
        }
    });

    const lifecyles = instance as WebComponentState<any>;
    if (lifecyles.onAfterSerialize) {
        lifecyles.onAfterSerialize(state);
    }
    return state;
}

export function stateSetter(instance: any, definition: WebComponentDefinition, newState: any) {
    if (!newState) {
        return;
    }

    // CONVERT STRING TO OBJECT IF NEEDED
    if (typeof(newState) === 'string') {
        if (newState.startsWith('{')) {
            newState = JSON.parse(newState);
        } else {
            newState = jsyaml.safeLoad(newState);
        }
    }

    const currentState = instance.__state__ || {};
    Object.keys(definition.properties).forEach(propertyName => {
        const property = definition.properties[propertyName];
        if (propertyName in newState) {
            currentState[propertyName] = newState[propertyName];
        } else if (currentState[propertyName] == null && property.default != null) {
            currentState[propertyName] = deepCopy(property.default);
        }
    });

    instance.__state__ = deepCopy(currentState);

    const lifecyles = instance as WebComponentState<any>;
    if (lifecyles.onAfterDeserialize) {
        lifecyles.onAfterDeserialize();
    }
}

/**
 * Inject web components defaults properties (`cid`, `debug`...) to the given `definition` object.
 * @param definition Definition object to modify.
 *@returns The modified definition object.
 */
export function defineWebComponent(definition: WebComponentDefinition): WebComponentDefinition {
    definition.properties = {
        ...definition.properties,
        cid: {
            name: 'cid',
            default: '',
            type: 'string',
            description: 'Identifiant unique du composant.'
        },
        debug: {
            name: 'debug',
            default: false,
            type: 'boolean',
            description: 'Affiche les propriétés du composant sur la page.'
        },
        selector: {
            name: 'selector',
            default: definition.selector,
            type: 'string',
            description: 'Nom de la balise HTML associée au composant.'
        },
    } as Record<string, WebComponentProperty>;
    return definition;
}

export const WEB_COMPONENT_DEFINITIONS = new InjectionToken<WebComponentDefinition[]>('WEB_COMPONENT_DEFINITIONS');
