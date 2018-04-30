import { NgModule } from '@angular/core';
import { NotificationService } from "./notification.service"
import { MessageService } from "primeng/components/common/messageservice"
import { ServerConfigService } from "./server-config.service";

@NgModule({
  providers: [NotificationService, MessageService, ServerConfigService],
})
export class VaderCommonModule {
}
