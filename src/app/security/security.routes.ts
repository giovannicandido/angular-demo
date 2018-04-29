import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { OauthComponent } from './oauth/oauth.component'
import { DirectivesComponent } from './directives/directives.component'
import { LoginGuard } from 'angular-spa'

export const securityRoute: Routes = [
  {path: 'oauth', component: OauthComponent, canActivate: [LoginGuard]},
  {path: 'directives', component: DirectivesComponent, canActivate: [LoginGuard]}
]

@NgModule({
  imports: [
    RouterModule.forChild(securityRoute)
  ]
})
export class SecurityRouteModule {
}
