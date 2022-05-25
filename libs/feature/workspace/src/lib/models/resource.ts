export declare type ResourceTypes = 'MODEL' | 'EXERCISE' | 'ACTIVITY';

export declare type ResourceStatus =
    | 'DRAFT'
    | 'READY'
    | 'BUGGED'
    | 'DEPRECATED'
    | 'NOT_TESTED';

export interface Resource {
    id: number;
    type: ResourceTypes;
    name: string;
    desc: string;
    status: ResourceStatus;
    author: string;
    circle: {
        id: number;
        name: string;
    };
    permissions: {
        write: boolean;
        delete: boolean;
    };
    topics: string[];
    levels: string[];
    createdAt: string;
    updatedAt: string;
    versionsCount: number;
    url: string;
    filesUrl: string;
    circleUrl: string;
    versionsUrl: string;
    live_url: string;
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
    orderBy?: 'name' | 'date';
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
    files?: Record<string, { type: 'file' | 'folder'; content?: string }>;
}

export interface UpdateResourceForm {
    resource: Resource;
    name?: string;
    desc?: string;
    status?: ResourceStatus;
    topics?: string[];
    levels?: string[];
}
