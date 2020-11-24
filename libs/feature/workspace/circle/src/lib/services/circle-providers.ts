import { Provider } from '@angular/core';
import { CircleProvider } from '../models/circle-provider';
import { MockCircleService } from './mock-circle.service';
import { RemoteCircleService } from './remote-circle.service';

export const MockCircleProvider: Provider = {
    provide: CircleProvider,
    useClass: MockCircleService
};

export const RemoteCircleProvider: Provider = {
    provide: CircleProvider,
    useClass: RemoteCircleService
};
