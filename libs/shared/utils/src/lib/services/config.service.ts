import { Injectable } from '@angular/core';

/**
 * Application configuration service.
 */
@Injectable({providedIn: 'root'})
export class ConfigService {
    private demo = true;

    get isDemo(): boolean {
        return this.demo;
    }

    set isDemo(value: boolean) {
        this.demo = value;
    }
}
