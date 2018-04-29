import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { OauthComponent } from './oauth/oauth.component'
import { DirectivesComponent } from './directives/directives.component'

export const securityRoute: Routes = [
  {path: 'oauth', component: OauthComponent},
  {path: 'directives', component: DirectivesComponent}
]

@NgModule({
  imports: [
    RouterModule.forChild(securityRoute)
  ]
})
export class SecurityRouteModule {
}
