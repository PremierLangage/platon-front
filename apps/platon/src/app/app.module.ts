// ANGULAR
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxLazyElModule } from '@juristr/ngx-lazy-el';

// LIBS
import { ComponentsModule, WEB_COMPONENTS_REGISTRY } from '@platon/components';
import { SharedVendorsModule } from '@platon/shared/vendors';
import { AppComponent } from './app.component';



@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        SharedVendorsModule,
        ComponentsModule,
        NgxLazyElModule.forRoot(WEB_COMPONENTS_REGISTRY)
    ],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    bootstrap: [] // LEAVE EMPTY SINCE WE ARE USING ANGULAR ELEMENTS
})
export class AppModule {
    ngDoBootstrap() {} // REQUIRED SINCE WE ARE USING ANGULAR ELEMENTS
}
