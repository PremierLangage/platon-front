export declare type UserRole = 'Teacher' | 'Student';

export interface AuthUser {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    isAdmin: boolean;
    avatar: string;
    role: UserRole;
}

