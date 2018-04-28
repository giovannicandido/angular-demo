/**
 *
 * @author Giovanni Silva
 */
import { Injectable } from '@angular/core'

@Injectable()
export class LoadingInterceptorService {
  isLoading = false

  startLoading() {
    this.isLoading = true
  }

  stopLoading() {
    this.isLoading = false
  }
}
