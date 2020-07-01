// ANGULAR
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// LIBS
import { NgxLazyElModule } from '@juristr/ngx-lazy-el';
import { FeaturesWebComponentsModule, WEB_COMPONENTS_REGISTRY } from '@platon/features/web-components';
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
        FeaturesWebComponentsModule,

        NgxLazyElModule.forRoot(WEB_COMPONENTS_REGISTRY)
    ],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    bootstrap: [AppComponent]
})
export class AppModule {}
