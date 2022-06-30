export interface Asset {
    id: number;
    name: string;
    date_creation: string;
    parent?: number;
    resource: number;
    resource_version: string;
}
