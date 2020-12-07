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

export interface Member {
    id: number;
    circleId: number;
    picture: string;
    userName: string;
    lastName: string;
    firstName: string;
    isAdmin: boolean;
    isPending: boolean;
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
    /** Identifier of the directory containing the resource files */
    directoryId: string;
}

export interface Circle extends Resource {
    parentId?: number;
}

export interface PublishableResource extends Resource {
    status: ResourceStatus;
    version: number;
    circleId: number;
}

export interface Exercise extends PublishableResource {
    // TODO maybe add more fields later
}

export interface Activity extends PublishableResource {
    // TODO maybe add more fields later
}

