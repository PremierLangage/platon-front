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

export interface CircleCompletion {
    names: string[];
    topics: string[];
    levels: string[];
}

export interface CircleWatcher {
    url: string;
    username: string;
}
export interface Invitation {
    inviter: string;
    invitee: string;
    date: string;
    status: MemberStatus;
    url: string;
    circleUrl: string;
}

export interface CircleFilters {
    search?: string;
    opened?: boolean;
    updatedAt?: number;
    members?: string[];
    watchers?: string[];
    offset?: number;
    limit?: number;
    orderBy?:
    'name' |
    'date' |
    'members' |
    'watchers' |
    'resources'
    ;
}


export interface CircleForm {
    name: string;
    desc: string;
    parent: number;
    opened: boolean;
    topics: string[];
    levels: string[];
}

export interface InvitationForm {
    circle: Circle;
    invitee: string;
    status: MemberStatus;
}

export interface Topic {
    name: string;
    desc: string;
    references: number;
}

export declare type Level = string;
