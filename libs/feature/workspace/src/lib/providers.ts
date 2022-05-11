import { Provider } from '@angular/core';
import { AssetProvider } from './models/asset-provider';
import { CircleProvider } from './models/circle-provider';
import { FileProvider } from './models/file-provider';
import { ResourceProvider } from './models/resource-provider';
import { RemoteAssetProvider } from './services/remote-asset-provider';
import { RemoteCircleProvider } from './services/remote-circle-provider';
import { RemoteFileProvider } from './services/remote-file-provider';
import { RemoteResourceProvider } from './services/remote-resource-provider';

export const WORKSPACE_PROVIDERS: Provider[] = [
    { provide: FileProvider, useClass: RemoteFileProvider },
    { provide: CircleProvider, useClass: RemoteCircleProvider },
    { provide: ResourceProvider, useClass: RemoteResourceProvider },
    { provide: AssetProvider, useClass: RemoteAssetProvider },
];
