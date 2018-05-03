import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ButtonModule, ConfirmationService, ContextMenuModule, DataTableModule, ToolbarModule } from 'primeng/primeng'
import { DataTableComponent } from './data-table/data-table.component'
import { VaderCommonModule } from '../common/common.module'
import { FormGroupComponent } from './form-group/form-group.component'
import { InputDisabledDirective } from './input-disabled'
import { ModalModule } from './modal/modal.module'

@NgModule({
  imports: [
    CommonModule,
    DataTableModule,
    ToolbarModule,
    ContextMenuModule,
    ButtonModule,
    VaderCommonModule,
    ModalModule
  ],
  providers: [
    ConfirmationService
  ],
  declarations: [
    DataTableComponent,
    FormGroupComponent,
    InputDisabledDirective

  ],
  exports: [
    DataTableComponent,
    ModalModule,
    InputDisabledDirective,
    FormGroupComponent
  ]
})
export class VaderCrudModule {
}
