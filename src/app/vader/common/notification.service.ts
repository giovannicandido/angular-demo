import { Injectable } from '@angular/core'
import { MessageService } from 'primeng/components/common/messageservice'

@Injectable()
export class NotificationService {

  constructor(private messageService: MessageService) {
  }

  showMessage(message: Message) {
    this.messageService.add(message)
  }
}

export interface Message {
  detail: string,
  summary?: string,
  severity?: 'warn' | 'info' | 'success'
}
