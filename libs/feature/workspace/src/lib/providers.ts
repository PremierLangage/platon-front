import { Provider } from '@angular/core';
import { CircleProvider } from './models/circle-provider';
import { FileProvider } from './models/file-provider';
import { PublisherProvider } from './models/publisher-provider';
import { ResourceProvider } from './models/resource-provider';
import { RemoteCircleProvider } from './services/remote-circle-provider';
import { RemoteFileProvider } from './services/remote-file-provider';
import { RemotePublisherProvider } from './services/remote-publisher.provider';
import { RemoteResourceProvider } from './services/remote-resource-provider';

export const WORKSPACE_PROVIDERS: Provider[] = [
    { provide: FileProvider, useClass: RemoteFileProvider },
    { provide: CircleProvider, useClass: RemoteCircleProvider },
    { provide: ResourceProvider, useClass: RemoteResourceProvider },
    { provide: PublisherProvider, useClass: RemotePublisherProvider },
];
