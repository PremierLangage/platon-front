// ANGULAR
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxLazyElModule } from '@juristr/ngx-lazy-el';

// LIBS
import { FeaturesWebComponentsModule, WEB_COMPONENTS_BUNDLES } from '@platon/features/web-components';
import { SharedVendorsModule } from '@platon/shared/vendors';

// MODULE
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
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
