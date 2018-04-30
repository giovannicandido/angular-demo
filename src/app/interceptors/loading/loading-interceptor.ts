import { Interceptor } from 'angular-http-interceptor'
import { RequestArgs } from '@angular/http/src/interfaces'
import { Observable } from 'rxjs/Observable'
import { LoadingInterceptorService } from './loading-interceptor.service'
import { Response } from '@angular/http'
import { Injectable } from '@angular/core'

import 'rxjs/add/operator/delay'
import 'rxjs/add/observable/empty'

@Injectable()
export class LoadingInterceptor implements Interceptor {
  delayTime = 200

  constructor(private service: LoadingInterceptorService) {

  }

  after(response: Response): void {
    this.service.stopLoading()
  }

  before(request: RequestArgs): Observable<any> {
    this.service.startLoading()
    // dica importe no main
    return Observable.empty().delay(this.delayTime)
  }

  error(error: Response): void {
    this.service.stopLoading()
  }

}
