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
    /** Users with write access to the resource informations. */
    admins: string[];
    /** Users with read access to the resource data.  */
    watchers: string[];
    /** Users with write access to the resource data.  */
    contributors: string[];
}

export enum ResourceTypes {
    CIRCLE = 'CIRCLE',
    PACKAGE = 'PACKAGE',
    EXERCISE = 'EXERCISE',
    ACTIVITY = 'ACTIVITY',
}

export enum ResourceStatus {
    DRAFT = "DRAFT",
    READY = "READY",
    BUGGED = "BUGGED",
    DEPRECATED = "DEPRECATED",
    NOT_TESTED = "NOT_TESTED",
}

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
