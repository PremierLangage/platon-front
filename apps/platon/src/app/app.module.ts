// ANGULAR
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// LIBS
import { SharedVendorsModule } from '@platon/shared/vendors';

import { AppComponent } from './app.component';
@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        SharedVendorsModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
