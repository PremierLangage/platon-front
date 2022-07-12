export declare type AssetTypes =
    'COURS' |
    'ACTIVITY' |
    'EXERCICE'
    ;

export interface Asset {
    slugName: string;
    type: AssetTypes;
    properties: Record<string, any>;
    content: Record<string, any>;
}

export interface AssetList {
    count: number;
    next: string;
    previous: string;
    results: Asset[];
}
