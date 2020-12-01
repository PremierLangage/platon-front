export const ResourceSearchIndexes: ReadonlyArray<string> = [
    'name',
    'tags',
    'contributors.userName',
    'contributors.lastName',
    'contributors.firstName',
];
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
    /** Status of the resource. */
    status: ResourceStatus;
    /** List of tags associated with the resource. */
    tags: string[];
    /** Unix timestamp value representinng the last update date of the resource. */
    date: number;
    /** Brief description of the resource. */
    description: string;
    /** Users with write access to the resource and it's data. */
    admins: Member[];
    /** Users with read access to the resource data.  */
    watchers: Member[];
    /** Users with write access to the resource data.  */
    contributors: Member[];
}


export declare type ResourceTypes =
    'CIRCLE' |
    'PACKAGE' |
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


export interface Circle extends Resource {
    activityCount: number;
    exerciseCount: number;
}

export interface Package extends Resource {
    version: number;
}

export interface Exercise extends Resource {
    circleId: string;
    version: number;
}

export interface Activity extends Resource {
    circleId: string;
    version: number;
}
