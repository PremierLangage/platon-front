import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClientXsrfModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpParamEncoderInterceptor } from './http/http-param-encoder-interceptor.service';


@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,
    HttpClientXsrfModule.withOptions({
        cookieName: 'csrftoken',
        headerName: 'X-CSRFToken',
    }),
  ],
  exports: [
    HttpClientModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpParamEncoderInterceptor, multi: true },
  ]
})
export class CoreConfigModule {}
