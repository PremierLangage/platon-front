import { IDynamicService } from '@platon/shared/utils';

export abstract class AuthProvider implements IDynamicService {
    abstract injectable(): boolean;

    /**
     * Gets the unique ID of the current user
     * or null if there is no logged user.
     */
    abstract uid(): Promise<number | undefined>;

    /** Sign out the current user */
    abstract signOut(): Promise<void>;

    /**
     * Signs in an user using email and password.
     * @param email the email of the user
     * @param password the password of the user
     */
    abstract signInWithEmailAndPassword(email: string, password: string): Promise<void>;
}
