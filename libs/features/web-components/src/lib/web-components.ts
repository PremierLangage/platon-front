import { ChangeDetectorRef, InjectionToken } from '@angular/core';
import { deepCopy } from '@platon/shared/utils';
import { JSONSchema7 } from 'json-schema';

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
    /** Optional url to a markdown file containing the full description of the component. */
    fullDescriptionUrl?: string;
    /** JSONSchema describing the properties of the component. */
    schema: Omit<JSONSchema7, 'properties'> & { // change properties map value types
        properties: Record<string, JSONSchema7>
    };
    /** State to show in showcase section of the documentation page. */
    showcase?: Record<string, any>;
}

/**
 * Basic representation of a web component model.
 */
export interface IWebComponent {
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
     * @param state The state that will be returned by the getter.
     * @returns the state or a computed version of the state.
     */
    onGetState?(state: T): T;

    /**
     * A callback method that is invoked immediately after the `state` setter runs.
     * Define this method to handle any additional validation and initialization tasks.
     *
     * Remark:
     * Angular change detection is right after the end of this method refresh the view.
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
            if (this.$__suspend_change_detector__$) {
                return;
            }
            this.$__suspend_change_detector__$ = true;
            const hooks = this as WebComponentHooks<any>;
            if (hooks.onSetState) {
                hooks.onSetState();
            }
            const detector = this.injector.get(ChangeDetectorRef) as ChangeDetectorRef;
            detector.detectChanges();
            this.$__suspend_change_detector__$ = false;
        };
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
    // for each mutation of the state until $__suspend_change_detector__$ is set to false.
    const batch = instance.$__suspend_change_detector__$ ?? false;
    instance.$__suspend_change_detector__$ = true;

    // define missing required properties
    const state = instance.$__state__$;
    const properties = definition.schema.properties;
    Object.keys(properties).forEach(propertyName => {
        const property = properties[propertyName];
        if (state[propertyName] == null && property.default != null) {
            state[propertyName] = deepCopy(property.default);
        }
    });

    instance.$__suspend_change_detector__$ = batch;

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
    // for each mutation of the state until $__suspend_change_detector__$ is set to false.
    const batch = instance.$__suspend_change_detector__$ ?? false;
    instance.$__suspend_change_detector__$ = true;

    // copy only allowed properties from newState to state.
    const state = instance.state;
    // tslint:disable-next-line: no-non-null-assertion
    Object.keys(definition.schema.properties!).forEach(propertyName => {
        if (propertyName in newState) {
            state[propertyName] = newState[propertyName];
        }
    });

    instance.$__suspend_change_detector__$ = batch;
    instance.$__detectChange__$();
}

/**
 * Inject web components defaults properties (`cid`, `debug`...) to the given `definition` object.
 * @param definition Definition object to modify.
 *@returns The modified definition object.
 */
export function defineWebComponent(definition: WebComponentDefinition): WebComponentDefinition {
    definition.schema.properties = {
        ...definition.schema.properties,
        cid: {
            default: '',
            type: 'string',
            description: 'Identifiant unique du composant.'
        },
        debug: {
            default: false,
            type: 'boolean',
            description: 'Afficher les propriétés du composant?'
        },
        selector: {
            default: definition.selector,
            readOnly: true,
            type: 'string',
            description: 'Nom de la balise HTML associée au composant.'
        },
    };
    definition.schema.additionalProperties = false;
    definition.schema.required = [
        ...(definition.schema.required || []),
        'cid',
        'selector',
    ];
    return definition;
}

export const WEB_COMPONENT_DEFINITIONS = new InjectionToken<WebComponentDefinition[]>('WEB_COMPONENT_DEFINITIONS');
