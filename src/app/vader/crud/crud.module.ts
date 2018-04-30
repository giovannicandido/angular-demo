import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"
import { ButtonModule, ConfirmationService, ContextMenuModule, DataTableModule, ToolbarModule } from "primeng/primeng"
import { DataTableComponent } from "./data-table/data-table.component"
import { VaderCommonModule } from "../common/common.module"
import { FormGroupComponent } from "./form-group/form-group.component"
import { InputDisabledDirective } from "./input-disabled"
import { VaderModalModule } from "./modal/modal.module";
import { PageFilterActionsComponent } from './page-filter-actions/page-filter-actions.component'

@NgModule({
  imports: [
    CommonModule,
    DataTableModule,
    ToolbarModule,
    ContextMenuModule,
    ButtonModule,
    VaderCommonModule,
    VaderModalModule
  ],
  providers: [
    ConfirmationService
  ],
  declarations: [
    DataTableComponent,
    FormGroupComponent,
    InputDisabledDirective,
    PageFilterActionsComponent

  ],
  exports: [
    DataTableComponent,
    VaderModalModule,
    InputDisabledDirective,
    FormGroupComponent,
    PageFilterActionsComponent,
    VaderCommonModule
  ]
})
export class VaderCrudModule {
}
