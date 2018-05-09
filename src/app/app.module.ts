import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'
import { AuthModule, InitOptions } from 'angular-spa'
import { RouterModule } from '@angular/router'
import { appRoutes } from './app.routes'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { InterceptorsModule } from './interceptors/interceptors.module'
import { SecurityModule } from './security/security.module'
import { HomeModule } from './home/home.module'
import { ComponentsModule } from './components/components.module'
import { GrowlModule } from 'primeng/growl'
import { ConfirmDialogModule } from 'primeng/primeng'


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    GrowlModule,
    AuthModule,
    HomeModule,
    InterceptorsModule,
    SecurityModule,
    ComponentsModule,
    ConfirmDialogModule
  ],
  providers: [
    {
      provide: InitOptions,
      useValue: {
        url: 'http://localhost:9080/auth',
        realm: 'master',
        clientId: 'angular-demo',
        onLoad: 'check-sso'
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
