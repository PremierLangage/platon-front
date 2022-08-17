export declare type AssetTypes =
    'COURS' |
    'ACTIVITY' |
    'EXERCISE'
    ;

export interface Asset {
    path: string;
    name: string;
    type: AssetTypes;
    properties: Record<string, any>;
    content: Record<string, any>;
}

export interface UpdateAssetForm {
    path: string;
    content: Record<string, any>;
}

export interface AssetList {
    count: number;
    next: string;
    previous: string;
    results: Asset[];
}

export interface AssetContent {
    position: number;
    type: AssetTypes;
    name: string;
    path: string;
}
