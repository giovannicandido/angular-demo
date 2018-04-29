import { NgModule } from '@angular/core'
import { CommonModule } from '../common/common.module'
import { OauthComponent } from './oauth/oauth.component'
import { DirectivesComponent } from './directives/directives.component'
import { SecurityRouteModule } from './security.routes'
import { AuthModule } from 'angular-spa'

@NgModule({
  imports: [
    CommonModule,
    AuthModule,
    SecurityRouteModule
  ],
  exports: [
    SecurityRouteModule
  ],
  declarations: [OauthComponent, DirectivesComponent]
})
export class SecurityModule { }
