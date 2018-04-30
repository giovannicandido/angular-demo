import { NgModule } from '@angular/core'
import { CommonModule } from '../common/common.module'
import { CrudComponent } from './crud/crud.component'
import { ComponentsRoutesModule } from './components.routes'
import { CommunicationComponent } from './communication/communication.component'
import { CounterComponent } from './communication/counter/counter.component'
import { Counter2Component } from './communication/counter2/counter2.component'
import { CounterService } from './communication/counter.service'
import { VaderCrudModule } from '../vader/crud/crud.module'
import { PessoaService } from './crud/pessoa.service';
import { CrudFormComponent } from './crud/crud-form/crud-form.component'

@NgModule({
  imports: [
    CommonModule,
    ComponentsRoutesModule,
    VaderCrudModule
  ],
  providers: [
    CounterService,
    PessoaService
  ],
  exports: [
    ComponentsRoutesModule
  ],
  declarations: [CrudComponent, CommunicationComponent, CounterComponent, Counter2Component, CrudFormComponent]
})
export class ComponentsModule {
}
