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
        NgxLazyElModule.forRoot([
            ...WEB_COMPONENTS_REGISTRY,
            /**
             * TO ALLOW EACH TIME TO TEST IN ISOLATION THE WEB COMPONENTS
             * THE DRAFTS FOLDER IS ADD TO THE .gitignore FILE SO YOU MUST A DRAFT FEATURE MODULE
             * app/drafts
             *  drafts.component.scss
             *  // ADD YOUR CSS HERE
             *  drafts.component.html
             *      <!-- ADD YOUR WEB COMPONENTS HERE e.g.  <platon-input></platon-input> -->
             *
             * drafts.component.ts
             *       import { Component } from '@angular/core';
             *
             *       @Component({
             *           selector: 'app-drafts',
             *           templateUrl: 'drafts.component.html',
             *           styleUrls: ['drafts.component.scss']
             *       })
             *       export class DraftsComponent {}
             *
             *  drafts.module.ts
             *
             *      import { NgModule, CUSTOM_ELEMENTS_SCHEMA, Type } from '@angular/core';
             *      import { DraftsComponent } from './drafts.component';
             *      import { CommonModule } from '@angular/common';
             *
             *      @NgModule({
             *          imports: [
             *              CommonModule,
             *          ],
             *          declarations: [
             *              DraftsComponent,
             *          ],
             *          exports: [
             *              DraftsComponent,
             *          ],
             *          schemas: [CUSTOM_ELEMENTS_SCHEMA]
             *      })
             *      export class DraftsModule {
             *          customElementComponent: Type<any> = DraftsComponent;
             *      }
             * ```
             */
            { selector: 'app-drafts', loadChildren: () => import('./drafts/drafts.module').then(m => m.DraftsModule) }
        ])
    ],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    bootstrap: [AppComponent]
})
export class AppModule {}
