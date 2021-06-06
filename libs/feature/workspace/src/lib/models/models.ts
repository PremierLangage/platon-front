export declare type CircleTypes =
    'PUBLIC' |
    'PERSONAL'
    ;

export declare type CircleEventTypes =
    'MEMBER_CREATE' |
    'MEMBER_REMOVE' |
    'RESOURCE_CREATE' |
    'RESOURCE_STATUS_CHANGE'
    ;

export declare type MemberStatus =
    'ADMIN' |
    'MEMBER'
    ;

export declare type ResourceTypes =
    'MODEL' |
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


export interface Circle {
    id: number;
    name: string;
    type: CircleTypes;
    parent: number;
    opened: boolean;
    desc: string;
    topics: string[];
    levels: string[];
    createdAt: string;
    updatedAt: string;
    childrenCount: number;
    watchersCount: number;
    membersCount: number;
    modelsCount: number;
    exercisesCount: number;
    activitiesCount: number;
    resourcesCount: number;
    url: string;
    eventsUrl: string;
    membersUrl: string;
    watchersUrl: string;
    resourcesUrl: string;
    invitationsUrl: string;
}

export interface CircleTree {
    id: number;
    name: string;
    desc: string;
    children?: CircleTree[];
}

export interface CircleEvent {
    id: number;
    url: string;
    type: string;
    date: string;
    data: Record<string, any>;
}

export interface CircleMember {
    url: string;
    status: MemberStatus;
    username: string;
    dateJoined: string;
}

export interface CircleWatcher {
    url: string;
    username: string;
}

export interface Resource {
    id: number;
    type: ResourceTypes;
    name: string;
    desc: string;
    status: ResourceStatus;
    author: string;
    circle: number;
    topics: string[];
    levels: string[];
    createdAt: string;
    updatedAt: string;
    versionsCount: number;
    url: string;
    filesUrl: string;
    circleUrl: string;
    versionsUrl: string;
}

export interface Invitation {
    inviter: string;
    invitee: string;
    date: string;
    status: MemberStatus;
    url: string;
    circleUrl: string;
}

export const STATUS_COLORS: Record<ResourceStatus, string> = {
    DRAFT: 'blue',
    READY: 'green',
    BUGGED: 'magenta',
    NOT_TESTED: 'gold',
    DEPRECATED: 'red'
};

export const STATUS_LABELS: Record<ResourceStatus, string> = {
    DRAFT: 'Brouillon',
    READY: "Prêt à l'utilisation",
    BUGGED: 'Contient des bugs',
    NOT_TESTED: "Besoin d'être tester",
    DEPRECATED: 'Ne pas utiliser'
};

