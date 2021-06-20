export const AuthUserSearchIndexes = [
    'username', 'email', 'lastName', 'firstName'
];

export interface AuthUser {
    id: number;
    url: string;
    email: string;
    avatar?: string;
    isAdmin: boolean;
    isEditor: boolean;
    username: string;
    lastName: string;
    firstName: string;
}


export interface AuthUserFilters {
    admin?: boolean;
    editor?: boolean;
    search?: string;
    offset?: number;
    limit?: number;
}
