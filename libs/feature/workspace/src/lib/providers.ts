import { Provider } from '@angular/core';
import { ResourceProvider } from './models/resource-provider';
import { InMemoryResourceProvider } from './services/in-memory-resource-provider';

export const WORKSPACE_PROVIDERS: Provider[] = [
    { provide: ResourceProvider, multi: true, useClass: InMemoryResourceProvider },
];
