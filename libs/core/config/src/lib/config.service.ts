import { Injectable } from '@angular/core';

/**
 * Application configuration service.
 */
@Injectable({providedIn: 'root'})
export class ConfigService {
    get isServerRunning(): boolean {
        return true; // document.body.getAttribute('platon-api-version') != null;
    }
}
