import { Provider } from '@angular/core';
import { AssetProvider } from './models/asset-provider';
import { CircleProvider } from './models/circle-provider';
import { CoursProvider } from './models/cours-provider';
import { FileProvider } from './models/file-provider';
import { ResourceProvider } from './models/resource-provider';
import { RemoteAssetsProvider } from './services/remote-asset-provider';
import { RemoteCircleProvider } from './services/remote-circle-provider';
import { RemoteCoursProvider } from './services/remote-cours-provider';
import { RemoteFileProvider } from './services/remote-file-provider';
import { RemoteResourceProvider } from './services/remote-resource-provider';

export const WORKSPACE_PROVIDERS: Provider[] = [
    { provide: FileProvider, useClass: RemoteFileProvider },
    { provide: CircleProvider, useClass: RemoteCircleProvider },
    { provide: ResourceProvider, useClass: RemoteResourceProvider },
    { provide: AssetProvider, useClass: RemoteAssetsProvider },
    { provide: CoursProvider, useClass: RemoteCoursProvider }
];
