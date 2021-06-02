import { Provider } from '@angular/core';
import { CircleProvider } from './models/circle-provider';
import { RemoteCircleProvider } from './services/remote-circle-provider';

export const WORKSPACE_PROVIDERS: Provider[] = [
    { provide: CircleProvider, useClass: RemoteCircleProvider }
];
