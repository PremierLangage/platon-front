export declare type AssetTypes = 'COURS' | 'ACTIVITY' | 'EXERCICE';

export interface Asset {
    name: string;
    type: AssetTypes;
}

export interface Cours {
    name: string;
    image: string;
}
