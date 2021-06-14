import { Provider } from '@angular/core';
import { CircleProvider } from './models/circle-provider';
import { ResourceFileProvider } from './models/resource-file-provider';
import { ResourceProvider } from './models/resource-provider';
import { RemoteCircleProvider } from './services/remote-circle-provider';
import { RemoteResourceFileProvider } from './services/remote-resource-file-provider';
import { RemoteResourceProvider } from './services/remote-resource-provider';

export const WORKSPACE_PROVIDERS: Provider[] = [
    { provide: ResourceFileProvider, useClass: RemoteResourceFileProvider },
    { provide: CircleProvider, useClass: RemoteCircleProvider },
    { provide: ResourceProvider, useClass: RemoteResourceProvider },
];
