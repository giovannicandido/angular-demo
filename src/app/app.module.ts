import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {AuthModule, InitOptions} from 'angular-spa';
import {HttpModule} from '@angular/http';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { TopbarComponent } from './topbar/topbar.component';
import { HomeComponent } from './home/home.component';
import {RouterModule} from '@angular/router';
import {appRoutes} from './app.routes';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {InterceptorsModule} from './interceptors/interceptors.module';
import { CommonModule } from './common/common.module'


@NgModule({
  declarations: [
    AppComponent,
    SidemenuComponent,
    TopbarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    AuthModule,
    RouterModule.forRoot(appRoutes),
    InterceptorsModule,
    CommonModule
  ],
  providers: [
    {
      provide: InitOptions,
      useValue: {
        url: 'http://localhost:9080/auth',
        realm: 'master',
        clientId: 'angular-demo'
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
