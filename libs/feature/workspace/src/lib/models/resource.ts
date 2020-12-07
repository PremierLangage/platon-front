// tslint:disable: no-empty-interface

export const ResourceSearchIndexes: ReadonlyArray<string> = [
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
    /** Identifier of the parent circle. */
    parentId?: number;
}

/**
 * A resource publishabled to the asset server.
 */
export interface PublishableResource extends Resource {
    /** Status of the resource. */
    status: ResourceStatus;
    /** Current version of the resource. */
    version: number;
    /** Identifier of the circle associated to the resource. */
    circleId: number;
}

export interface Exercise extends PublishableResource {
    // TODO maybe add more fields later
}

export interface Activity extends PublishableResource {
    // TODO maybe add more fields later
}

