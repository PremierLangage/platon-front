// ANGULAR
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// LIBS
import { FeatureWebComponentModule } from '@platon/feature/web-component';
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
        FeatureWebComponentModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
