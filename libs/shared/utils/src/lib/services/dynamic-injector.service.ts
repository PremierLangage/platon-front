import {
    AbstractType,
    Injectable,
    InjectionToken,
    Injector,
    Type,
} from '@angular/core';

export interface IDynamicService {
    injectable(): boolean;
}

@Injectable({ providedIn: 'root' })
export class DynamicInjectorService {

    constructor(private readonly injector: Injector) {}

    get<T extends IDynamicService>(
        token: Type<any> | InjectionToken<any> | AbstractType<any>
    ) {
        return (this.injector.get(token, []) as T[]).find((e) =>
            e.injectable()
        );
    }
}
