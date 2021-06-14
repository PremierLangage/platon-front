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

export interface ResourceVersion {
    number: number;
    author: string;
    status: ResourceStatus;
    message: string;
    createdAt: string;
    url: string;
    filesUrl: string;
}

export interface ResourceFilters {
    search?: string;
    circle?: number;
    updatedAt?: number;
    authors?: string[];
    types?: ResourceTypes[];
    status?: ResourceStatus;
    offset?: number;
    limit?: number;
    orderBy?:
    'name' |
    'date'
    ;
}

export interface ResourceCompletion {
    names: string[];
    topics: string[];
    levels: string[];
}

export interface CreateResourceForm {
    type: ResourceTypes;
    name: string;
    desc: string;
    circle: number;
    topics: string[];
    levels: string[];
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

