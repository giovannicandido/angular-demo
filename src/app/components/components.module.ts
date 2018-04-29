import { NgModule } from '@angular/core'
import { CommonModule } from '../common/common.module'
import { CrudComponent } from './crud/crud.component'
import { ComponentsRoutesModule } from './components.routes'
import { CommunicationComponent } from './communication/communication.component'

@NgModule({
  imports: [
    CommonModule,
    ComponentsRoutesModule
  ],
  exports: [
    ComponentsRoutesModule
  ],
  declarations: [CrudComponent, CommunicationComponent]
})
export class ComponentsModule {
}
