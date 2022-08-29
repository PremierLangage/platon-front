import { AuthUser } from "@platon/core/auth";

export declare type AssetTypes =
    'COURS' |
    'ACTIVITY' |
    'EXERSICE'
    ;

export interface Asset {
    path: string;
    name: string;
    type: AssetTypes;
    created_at: string;
    updated_at: string;
    parent?: string;
    author?: AuthUser;
}

export interface AssetList {
    count: number;
    next: string;
    previous: string;
    results: Asset[];
}

export interface CreateAssetForm {
    type: AssetTypes;
    name: string;
    parent?: string;
}
