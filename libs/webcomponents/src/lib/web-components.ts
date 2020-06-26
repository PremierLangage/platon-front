/**
 * Configuration metadata that determines how a component should be processed, instantiated, and used at runtime.
 */
export interface WebComponentDefinition {
    /** Icon representing the component */
    icon: string;
    /** Name of the component */
    name: string;
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
    /** Property name */
    name: string;
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

export interface WebComponentEvents<T> {
    state: T;
    onAfterSerialize?(state: T): T;
    onAfterDeserialize(): void;
}

/**
 * Decorator that marks a class as a web component and provides configuration metadata that determines how the component should be processed, instantiated, and used at runtime.
 * @param definition metadata informations about the component.
 */
export function WebComponent(definition: Omit<WebComponentDefinition, 'constructor'>): ClassDecorator {
    return function(target: any) {
        injectDefaultProperties(definition);

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
        })

        defineWebComponentInDocument(definition);

        return target;
    }
}

export function stateGetter(instance: any, definition: WebComponentDefinition) {
    const state = instance.__state__;
    Object.keys(definition.properties).forEach(propertyName => {
        const property = definition.properties[propertyName];
        state[propertyName] = instance.__state__[propertyName];
        if (state[propertyName] == null && property.default != null) {
            if (typeof(property.default) === 'function') {
                state[propertyName] = property.default();
            } else {
                state[propertyName] = property.default;
            }
        }
    });

    const lifecyles = instance as WebComponentEvents<any>;
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
        newState = JSON.parse(newState);
    }

    const currentState = instance.__state__ || {};
    Object.keys(definition.properties).forEach(propertyName => {
        const property = definition.properties[propertyName];
        currentState[propertyName] = newState[propertyName] ?? currentState[propertyName];
        if (currentState[propertyName] == null && property.default != null) {
            if (typeof(property.default) === 'function') {
                currentState[propertyName] = property.default();
            } else {
                currentState[propertyName] = property.default;
            }
        }
    });

    instance.__state__ = currentState;
    const lifecyles = instance as WebComponentEvents<any>;
    if (lifecyles.onAfterDeserialize) {
        lifecyles.onAfterDeserialize();
    }
}

function injectDefaultProperties(definition: WebComponentDefinition) {
    definition.properties = {
        ...definition.properties,
        cid: {
            name: 'cid',
            default: '',
            type: 'string',
            description: 'Unique identifier of the component'
        },
        debug: {
            name: 'debug',
            default: false,
            type: 'boolean',
            description: 'Prints the current properties of the component'
        },
        selector: {
            name: 'selector',
            default: '',
            type: 'string',
            description: 'Selector of the component.'
        },
    } as Record<string, WebComponentProperty>;
}

/**
 * Store the given web component definition inside the property `document.platon.components` of the browserr document.
 * @param definition the web component metadata informations.
 */
function defineWebComponentInDocument(definition: WebComponentDefinition) {
    const platon = (document as any).platon || {};
    platon.components
        = platon.components
        || new Map<string, WebComponentDefinition>()
    ;
    platon.components.set(definition.selector, definition);
    (document as any).platon = platon;
}
