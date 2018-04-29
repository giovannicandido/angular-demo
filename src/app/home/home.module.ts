import { NgModule } from '@angular/core'
import { CommonModule } from '../common/common.module'
import { HomeComponent } from './home/home.component'
import { TopbarComponent } from './topbar/topbar.component'
import { SidemenuComponent } from './sidemenu/sidemenu.component'
import { RouterModule } from '@angular/router'

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    SidemenuComponent,
    TopbarComponent,
    HomeComponent
  ],
  exports: [
    SidemenuComponent,
    TopbarComponent,
    HomeComponent
  ]
})
export class HomeModule {

}
