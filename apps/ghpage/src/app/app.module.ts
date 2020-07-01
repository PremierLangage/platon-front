// ANGULAR
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxLazyElModule } from '@juristr/ngx-lazy-el';

// LIBS
import { WebComponentsModule, WEB_COMPONENTS_REGISTRY } from '@platon/features/web-components';
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
        WebComponentsModule,

        NgxLazyElModule.forRoot(WEB_COMPONENTS_REGISTRY)
    ],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    bootstrap: [AppComponent]
})
export class AppModule {}
