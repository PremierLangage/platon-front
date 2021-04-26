export const AuthUserSearchIndexes = [
    'email', 'lastName', 'firstName', 'userName'
];

export declare type UserRole = 'Teacher' | 'Student';

export interface AuthUser {
    id: number;
    role: UserRole;
    email: string;
    userName: string;
    lastName: string;
    firstName: string;
    picture: string;
    isAdmin: boolean;
}

