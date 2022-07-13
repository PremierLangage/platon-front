export declare type AssetTypes =
    'COURS' |
    'ACTIVITY' |
    'EXERCICE'
    ;

export interface Asset {
    path: string;
    type: AssetTypes;
    properties: Record<string, any>;
    content: {
        items: AssetContent[]
    };
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
}
