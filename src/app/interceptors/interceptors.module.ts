import { NgModule } from '@angular/core'
import { CommonModule } from '../common/common.module'
import { LoadingComponent } from './loading/loading.component'
import { MessageComponent } from './message/message.component'
import { InterceptorsRouteModule } from './interceptors.routes'
import { LoadingPageComponent } from './loading-page/loading-page.component'
import { LoadingInterceptorService } from './loading/loading-interceptor.service'
import { LoadingInterceptor } from './loading/loading-interceptor'
import { Interceptor } from 'angular-http-interceptor'
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import { MessageInterceptor } from './message/message.interceptor'

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    InterceptorsRouteModule
  ],
  providers: [
    LoadingInterceptorService,
    LoadingInterceptor,
    {
      provide: Interceptor,
      useExisting: LoadingInterceptor,
      multi: true
    }, {
      provide: Interceptor,
      useClass: MessageInterceptor,
      multi: true
    }
  ],
  declarations: [LoadingComponent, MessageComponent, LoadingPageComponent],
  exports: [
    InterceptorsRouteModule
  ]
})
export class InterceptorsModule {
}
