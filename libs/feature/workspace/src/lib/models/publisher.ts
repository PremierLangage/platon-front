import { Asset } from './asset';
import { Resource } from './resource';

export interface Publisher {
    name: string;
    date_creation: string;
    parent?: number;
    resource: number;
    resource_version: string;
}

export interface PublisherForm {
    resource: Resource;
    name: string;
}

export interface Publisher {
    count: number;
    next?: string;
    previous?: string;
    results?: Asset[];
}
