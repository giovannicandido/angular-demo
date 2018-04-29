import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { OauthComponent } from './oauth/oauth.component'
import { DirectivesComponent } from './directives/directives.component'
import { SecurityRouteModule } from './security.routes'

@NgModule({
  imports: [
    CommonModule,
    SecurityRouteModule
  ],
  exports: [
    SecurityRouteModule
  ],
  declarations: [OauthComponent, DirectivesComponent]
})
export class SecurityModule { }
