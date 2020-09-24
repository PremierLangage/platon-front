import { ChangeDetectorRef, InjectionToken } from '@angular/core';
import { deepCopy } from '@platon/shared/utils';

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
}

/**
 * Metadata informations about a web component property.
 */
export interface WebComponentProperty {
    /** Property type e.x: string, number, MyInterface... */
    type: string;
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
export interface WebComponentHooks<T> {
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
    onGetState?(state: T): T;

    /**
     * A callback method that is invoked immediately after the `state` setter runs.
     * Define this method to handle any additional validation and initialization tasks.
     *
     * Remark:
     * You may need to run Angular change detection at the end of this method
     * to refresh the view.
     */
    onSetState?(): void;
}

/**
 * Decorator that marks a class as a web component and provides configuration metadata that determines how the component should be processed, instantiated, and used at runtime.
 * @param definition metadata informations about the component.
 */
export function WebComponent(definition: WebComponentDefinition): ClassDecorator {
    return function(target: any) {
        const prototype = target.prototype;

        prototype.$__detectChange__$ = function() {
            if (this.$__batch_write__$) {
                return;
            }

            const hooks = this as WebComponentHooks<any>;
            if (hooks.onSetState) {
                hooks.onSetState();
            }

            const detector = this.injector.get(ChangeDetectorRef) as ChangeDetectorRef;
            detector.detectChanges();
        };

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
    // create a proxy to handles mutations of the state object.
    if (!instance.$__state__$) {
        const handler: ProxyHandler<any> = {
            get(target: any, key: string) {
                if (typeof target[key] === 'object' && target[key] !== null) {
                    return new Proxy(target[key], handler);
                }
                return target[key];
            },
            set(target, key, value) {
                target[key] = value;
                instance.$__detectChange__$();
                return true;
            }
        }
        instance.$__state__$ = new Proxy({
            cid: '',
            debug: false,
            selector: definition.selector
        }, handler);
    }

    // the following line ensure that onSetState hook will not be called
    // for each mutation of the state until $__batch_write__$ is set to false.
    instance.$__batch_write__$ = true;

    // define missing required properties
    const state = instance.$__state__$;
    Object.keys(definition.properties).forEach(propertyName => {
        const property = definition.properties[propertyName];
        if (state[propertyName] == null && property.default != null) {
            state[propertyName] = deepCopy(property.default);
        }
    });

    instance.$__batch_write__$ = false;

    const hooks = instance as WebComponentHooks<any>;
    if (hooks.onGetState) {
        hooks.onGetState(state);
    }

    return state;
}

export function stateSetter(instance: any, definition: WebComponentDefinition, newState: any) {
    if (!newState) {
        throw new Error('[web-components]: A webcomponent state cannot be null');
    }

    if (typeof(newState) === 'string') {
        newState = JSON.parse(newState);
    }

    // the following line ensure that onSetState hook will not be called
    // for each mutation of the state until $__batch_write__$ is set to false.
    instance.$__batch_write__$ = true;

    // copy only allowed properties from newState to state.
    const state = instance.state;
    Object.keys(definition.properties).forEach(propertyName => {
        if (propertyName in newState) {
            state[propertyName] = newState[propertyName];
        }
    });

    instance.$__batch_write__$ = false;
    instance.$__detectChange__$();
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
