// ANGULAR
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// LIBS
import { NgxLazyElModule } from '@juristr/ngx-lazy-el';
import { FeaturesWebComponentsModule, WEB_COMPONENTS_BUNDLES, WEB_COMPONENT_DEFINITIONS } from '@platon/features/web-components';
import { SharedVendorsModule } from '@platon/shared/vendors';

// MODULE
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        HttpClientModule,
        BrowserAnimationsModule,
        AppRoutingModule,

        SharedVendorsModule,
        FeaturesWebComponentsModule.forRoot(),

        NgxLazyElModule.forRoot(WEB_COMPONENTS_BUNDLES)
    ],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    bootstrap: [AppComponent]
})
export class AppModule {}
