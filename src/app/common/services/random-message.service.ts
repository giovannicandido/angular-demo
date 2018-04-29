/**
 * @author Giovanni Silva
 */
import { Injectable } from '@angular/core'
import { Http, Response } from '@angular/http'
import { Observable } from 'rxjs/Observable'

@Injectable()
export class RandomMessageService {

  constructor(private http: Http) {

  }

  getMessage(): Observable<Response> {
    const messageNumber = this.getRandomInt(1, 4)
    return this.http.get(`assets/data/message${messageNumber}.json`)
  }

  private getRandomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min)) + min
  }

}
