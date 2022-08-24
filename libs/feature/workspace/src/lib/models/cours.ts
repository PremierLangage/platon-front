import { AssetTypes } from "./asset";


export interface Cours {
    path: string;
    name: string;
    type: AssetTypes;
    created_at: string;
    updated_at: string;
    author?: string; // TODO change
    parent?: string;
}

export interface CoursList {
    count: number;
    next: string;
    previous: string;
    results: Cours[];
}

export interface CoursDetail {
    asset: Cours;
    description: string;
    content: Record<string, any>;
}

export interface UpdateCoursForm {
    asset: Cours;
    description: string;
    content: Record<string, any>;
}
