import { IDynamicService } from '@platon/shared/utils';
import { Observable } from 'rxjs';
import { AuthUser } from './auth-user';

/**
 * Provides an api to query user objects.
 */
export abstract class AuthUserProvider implements IDynamicService {
    abstract injectable(): boolean;

    /**
     * Finds the user identified by `uid`.
     * @param uid The identifier of the user to find.
     * @returns An observable that will emit the user found or `undefined` once the server will response.
     */
    abstract findById(uid: string): Observable<AuthUser | undefined>;

    /**
     * Finds ALl the users listed in the `uids` array.
     * @param uid An array of user identifiers to find.
     * @returns An observable that will emit the user found or `undefined` once the server will response.
     */
    abstract findAll(uids: string[]): Observable<AuthUser[]>;
}
