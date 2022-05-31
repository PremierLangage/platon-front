import { Provider } from '@angular/core';
import { AssetProvider } from './models/asset-provider';
import { CircleProvider } from './models/circle-provider';
import { FileProvider } from './models/file-provider';
import { LiveProvider } from './models/live-provider';
import { PublisherProvider } from './models/publisher-provider';
import { ResourceProvider } from './models/resource-provider';
import { RunnerProvider } from './models/runner-provider';
import { RemoteAssetProvider } from './services/remote-asset-provider';
import { RemoteCircleProvider } from './services/remote-circle-provider';
import { RemoteFileProvider } from './services/remote-file-provider';
import { RemoteLiveProvider } from './services/remote-live-provider';
import { RemotePublisherProvider } from './services/remote-publisher.provider';
import { RemoteResourceProvider } from './services/remote-resource-provider';
import { RemoteRunnerProvider } from './services/remote-runner-provider';

export const WORKSPACE_PROVIDERS: Provider[] = [
    { provide: FileProvider, useClass: RemoteFileProvider },
    { provide: CircleProvider, useClass: RemoteCircleProvider },
    { provide: ResourceProvider, useClass: RemoteResourceProvider },
    { provide: PublisherProvider, useClass: RemotePublisherProvider },
    { provide: AssetProvider, useClass: RemoteAssetProvider },
    { provide: RunnerProvider, useClass: RemoteRunnerProvider },
    { provide: LiveProvider, useClass: RemoteLiveProvider },
];
