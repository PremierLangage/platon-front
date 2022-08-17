import { AuthUser } from "@platon/core/auth";
import { AssetTypes } from "./asset";

export interface AssetCours {
    name: string;
    type: AssetTypes;
    created_at: string;
    updated_at: string;
    author: AuthUser;
}

export interface AssetCoursDetail {
    name: string;
    type: AssetTypes;
    created_at: string;
    updated_at: string;
    author: AuthUser;
    description: string;
    properties: Record<string, any>;
    content: Record<string, any>;
}

export interface AssetCoursList {
    count: number;
    next: string;
    previous: string;
    results: AssetCours[];
}

export interface AssetCoursSession {
    id: number;
    asset: string;
    user: number;
    data: Record<string, any>;
}

export interface CreateAssetCoursForm {
    name: string;
}

export interface UpdateAssetCourForm {
    name: string;
    description: string;
    content: Record<string, any>;
}
