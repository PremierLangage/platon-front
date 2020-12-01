export declare type UserRole = 'Teacher' | 'Student';

export interface AuthUser {
    id: number;
    firstName: string;
    lastName: string;
    userName: string;
    email: string;
    isAdmin: boolean;
    avatar: string;
    role: UserRole;
}

