import { Injectable } from '@angular/core'
import 'uikit'
import 'uikit/dist/js/components/notification'

export type CssLevel = 'info' | 'warning' | 'error' | 'success'

declare var UIkit

@Injectable()
export class MessageService {


  constructor() {
  }

  show(message: Message) {
    const kclass = this.mapLevelToCSSClass(message.level)
    UIkit.notification(this.getMessageWithDetail(message), {status: kclass})
  }

  confirm(message: string, fn: () => any) {
    UIkit.modal.confirm(message).then(fn)
  }

  private mapLevelToCSSClass(level: CssLevel) {
    switch (level) {
      case 'info': {
        return 'primary'
      }
      case 'error': {
        return 'danger'
      }
      case 'warning': {
        return 'warning'
      }
      case 'success': {
        return 'success'
      }
      default: {
        return 'primary'
      }
    }
  }

  private getMessageWithDetail(message: Message): string {

      return `
          <div class='summary'>${message.summary ? message.summary : ''}</div>
          <div class="message">${message.detail}</div>
      `
  }

}

export interface Message {
  summary?: string | number
  detail: string
  level: CssLevel
}
