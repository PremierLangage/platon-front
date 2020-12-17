import { InjectionToken } from '@angular/core';

export interface IContribution {
    readonly id: string;
    activate(): Promise<void>;
    deactivate(): Promise<void>;
}

export const EDITOR_CONTRIBUTIONS = new InjectionToken<IContribution[]>('EDITOR_CONTRIBUTIONS');
