import { Provider } from '@angular/core';
import { AUTH_OBSERVER } from '@platon/core/auth';
import { ResourceService } from './api/resource.service';
import { ResourceProvider } from './models/resource-provider';
import { InMemoryResourceProvider } from './services/in-memory-resource-provider';

export const WORKSPACE_PROVIDERS: Provider[] = [
    { provide: AUTH_OBSERVER, multi: true, useValue: ResourceService },
    { provide: ResourceProvider, useClass: InMemoryResourceProvider },
];
