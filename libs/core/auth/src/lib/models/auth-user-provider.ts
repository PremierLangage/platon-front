import { IDynamicService } from '@platon/shared/utils';
import { Observable } from 'rxjs';
import { AuthUser, UserRole } from './auth-user';

/**
 * Provides an api to query user objects.
 */
export abstract class AuthUserProvider implements IDynamicService {
    abstract injectable(): boolean;

    abstract search(filters: AuthUserFilters): Observable<AuthUser[]>;

    /**
     * Finds the user identified by `uid`.
     * @param uid The identifier of the user to find.
     * @returns An observable that will emit the user found or `undefined` once the server will response.
     */
    abstract findById(uid: number): Observable<AuthUser | undefined>;

    /**
     * Finds ALl the users listed in the `uids` array.
     * @param uid An array of user identifiers to find.
     * @returns An observable that will emit the user found or `undefined` once the server will response.
     */
    abstract findAll(uids: number[]): Observable<AuthUser[]>;
}


export interface AuthUserFilters {
    role: 'ALL' | UserRole;
    query?: string;
}
