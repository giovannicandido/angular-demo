import { NgModule } from "@angular/core"
import { ModalComponent } from "./modal.component"
import { CommonModule } from "@angular/common"
import { ButtonModule, DialogModule, SharedModule } from "primeng/primeng"

/**
 * @author Giovanni Silva
 */
@NgModule({
  imports: [CommonModule, DialogModule, ButtonModule, SharedModule],
  declarations: [ModalComponent],
  exports: [ModalComponent]
})
export class VaderModalModule {

}
