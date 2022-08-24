import { AssetTypes } from "./asset";

export interface Exersice {
    path: string;
    name: string;
    type: AssetTypes;
    created_at: string;
    updated_at: string;
    author?: string; // TODO change
    parent?: string;
}

export interface ExersiceList {
    count: number;
    next: string;
    previous: string;
    results: Exersice[];
}

export interface ExersiceDetail {
    asset: Exersice;
    content: Record<string, any>;
}
