/**
 * @author Giovanni Silva
 */
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { CrudComponent } from './crud/crud.component'
import { CommunicationComponent } from './communication/communication.component'
import { CrudFormComponent } from './crud/crud-form/crud-form.component'

export const componentsRoutes: Routes = [
  {path: 'communication', component: CommunicationComponent},
  {path: 'crud', component: CrudComponent},
  {path: 'crud/new', component: CrudFormComponent},
  {path: 'crud/new/:id', component: CrudFormComponent}
]

@NgModule({
  imports: [
    RouterModule.forChild(componentsRoutes)
  ]
})
export class ComponentsRoutesModule {

}
