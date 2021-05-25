export const AuthUserSearchIndexes = [
    'email', 'lastName', 'firstName', 'username'
];

export declare type UserRole = 'Teacher' | 'Student';

export interface AuthUser {
    id: number;
    role: UserRole;
    email: string;
    username: string;
    lastName: string;
    firstName: string;
    isAdmin: boolean;
}

