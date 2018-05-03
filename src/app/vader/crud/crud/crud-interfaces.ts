import { Observable } from 'rxjs/Observable'

export interface PreSave {
  preSave(data: SubmitEvent<any>): Observable<SubmitEvent<any>>
}

export interface SubmitEvent<T> {
  data: T
  editing: boolean
  closeModal: boolean
}
