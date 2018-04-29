/**
 * @author Giovanni Silva
 */
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { CrudComponent } from './crud/crud.component'
import { CommunicationComponent } from './communication/communication.component'

export const componentsRoutes: Routes = [
  {path: 'communication', component: CommunicationComponent},
  {path: 'crud', component: CrudComponent}
]

@NgModule({
  imports: [
    RouterModule.forChild(componentsRoutes)
  ]
})
export class ComponentsRoutesModule {

}
