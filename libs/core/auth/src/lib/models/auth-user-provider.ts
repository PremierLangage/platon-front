import { PageResult } from '@platon/shared/utils';
import { Observable } from 'rxjs';
import { AuthUser, AuthUserFilters } from './auth-user';

/**
 * Provides an api to query user objects.
 */
export abstract class AuthUserProvider{
    abstract search(filters: AuthUserFilters): Observable<PageResult<AuthUser>>;

    /**
     * Finds the user identified by `username`.
     * @param uid The username of the user to find.
     * @returns An observable that will emit the user found or `undefined` once the server will response.
     */
    abstract findByUserName(username: string): Observable<AuthUser | undefined>;

    /**
     * Finds ALl the users listed in the `userNames` array.
     * @param uid An array of user names to find.
     * @returns An observable that will emit the user found or `undefined` once the server will response.
     */
    abstract findAllByUserNames(userNames: string[]): Observable<AuthUser[]>;
}
