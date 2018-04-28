import { Injectable } from '@angular/core'
import { Interceptor } from 'angular-http-interceptor'
import {Response} from '@angular/http'
import { RequestArgs } from '@angular/http/src/interfaces'
import { Observable } from 'rxjs/Observable'
import { MessageService } from '../../common/message.service'

@Injectable()
export class MessageInterceptor implements Interceptor {

  constructor(private messageService: MessageService) {

  }

  after(response: Response): void {
    const message = this.getMessage(response)
    if (message != null) {
      this.messageService.show({detail: message, level: 'info'})
    }
  }

  before(request: RequestArgs): Observable<any> {
    return Observable.empty()
  }

  error(error: Response): void {
    const message = this.getMessage(error)
    if (message != null) {
      this.messageService.show({detail: message, level: 'error'})
    } else {
      this.messageService.show({detail: error.text(), level: 'error', summary: error.status})
    }
  }

  private getMessage(r: Response): string {
    try {
      const message = r.json().message
      return message
    } catch (e) {
      return null
    }
  }

}
