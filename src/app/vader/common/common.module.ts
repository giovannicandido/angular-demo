import { NgModule } from '@angular/core'
import { NotificationService } from './notification.service'
import { MessageService } from 'primeng/components/common/messageservice'

@NgModule({
  providers: [NotificationService, MessageService],
})
export class VaderCommonModule {
}
