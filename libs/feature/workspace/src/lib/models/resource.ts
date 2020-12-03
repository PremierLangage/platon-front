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

export interface Member {
    id: number;
    userName: string;
    lastName: string;
    firstName: string;
}

/**
 * Representation of a resource in a workspace.
 */
export interface Resource {
    /** Unique identifier of the resource. */
    id: string;
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
    parentId?: string;
    admins: Member[];
    requests: Member[];
    watchers: Member[];
    contributors: Member[];
}

export interface Exercise extends Resource {
    version: number;
    status: ResourceStatus;
    circleId: string;
}

export interface Activity extends Resource {
    version: number;
    status: ResourceStatus;
    circleId: string;
}

