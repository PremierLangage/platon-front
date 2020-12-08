// tslint:disable: no-empty-interface

export const RESOURCE_ICONS: Record<ResourceTypes, string> = {
    CIRCLE: 'group_work',
    EXERCISE: 'article',
    ACTIVITY: 'assessment',
};


export const RESOURCE_COLORS: Record<ResourceStatus, string> = {
    DRAFT: 'blue',
    READY: 'green',
    BUGGED: 'magenta',
    NOT_TESTED: 'gold',
    DEPRECATED: 'red'
};

export const RESOURCE_LABELS: Record<ResourceStatus, string> = {
    DRAFT: 'Brouillon',
    READY: 'Prêt à l\'utilisation',
    BUGGED: 'Contient des bugs',
    NOT_TESTED: 'Besoin d\'être tester',
    DEPRECATED: 'Ne pas utiliser'
};

export const RESOURCE_SEARCH_INDEXES: ReadonlyArray<string> = [
    'name',
    'tags',
];

export declare type ResourceTypes =
    'CIRCLE' |
    'EXERCISE' |
    'ACTIVITY'
    ;

export declare type ResourceStatus =
    'DRAFT' |
    'READY' |
    'BUGGED' |
    'DEPRECATED' |
    'NOT_TESTED'
    ;
export interface CircleStatus {
    DRAFT: number;
    READY: number;
    BUGGED: number;
    DEPRECATED: number;
    NOT_TESTED: number;
};

export interface ResourceEvent {
    id: number;
    date: number;
    text: string;
    resourceId: number;
    resourceType: ResourceTypes;
}


/**
 * Reprensentation of a Circle member.
 *
 * Notes:
 *
 * - Admin users are members of all the circles.
 * - Only admin users can edit the properties of a circle (date, description, documentation...)
 * - Only admin and member users can edit the publishable resources (exercise, activity) of the circle
 */
export interface Member {
    id: number;
    circleId: number;
    picture: string;
    userName: string;
    lastName: string;
    firstName: string;
    isAdmin: boolean;
}

/**
 * Representation of a resource in a workspace.
 */
export interface Resource {
    /** Unique identifier of the resource. */
    id: number;
    /** Type of the resource. */
    type: ResourceTypes;
    /** Name of the resource. */
    name: string;
    /** List of tags associated with the resource. */
    tags: string[];
    /** Unix timestamp value representinng the last update date of the resource. */
    date: number;
    /** Brief description of the resource. */
    description: string;
    /** Identifier of the directory containing the files of the resource */
    directoryId: number;
      /** Identifier of the forum associated to the resource */
    forumId: number;
    /** Optional documentation in markdown format. */
    documentation?: string;
}

export interface Circle extends Resource {
    /** Useful informations about the parent of the circle. */
    parent?: {
        id: number;
        name: string;
    }
}

/**
 * A resource publishabled to the asset server.
 */
export interface PublishableResource extends Resource {
    /** Status of the resource. */
    status: ResourceStatus;
    /** Current version of the resource. */
    version: number;
    /** Useful informations about the circle associated to the resource. */
    circle: {
        id: number;
        name: string;
    };
}

export interface Exercise extends PublishableResource {
    // TODO maybe add more fields later
}

export interface Activity extends PublishableResource {
    // TODO maybe add more fields later
}

