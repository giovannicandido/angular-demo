import { Http, Response, URLSearchParams } from '@angular/http'
import { Observable } from 'rxjs/Observable'
import { Subject } from 'rxjs/Subject'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise'
import { SpringRestModel } from './spring-rest-model'

/**
 * CRUD abstraction for rest services, specially Spring Data Rest Services
 * @author Giovanni Silva
 */
export abstract class RestService<T extends SpringRestModel> {

  abstract get URL(): string

  abstract get resourceRel(): string

  protected _onNewData = new Subject<T>()
  protected _onEditData = new Subject<T>()
  protected _onLoadAll = new Subject<Array<T>>()


  get onNewData(): Observable<T> {
    return this._onNewData.asObservable()
  }

  get onEditData(): Observable<T> {
    return this._onEditData.asObservable()
  }

  get onLoadAll(): Observable<Array<T>> {
    return this._onLoadAll.asObservable()
  }


  constructor(protected http: Http) {
  }

  // TODO loadAll and onLoadAll?
  loadAll(): Observable<Array<T>> {
    return this.http.get(this.URL).map(_ => this.toJson(_)).map((values) => {
      this._onLoadAll.next(values)
      return values
    });
  }

  // getById(id: any): Observable<T> {
  //   return this.http.get(`${this.URL}/${id}`).map(_ => this.toJson(_))
  // }
  //
  post(data: T): Observable<Response> {
    let observable = this.http.post(this.URL, data);
    return observable.map(response => {
      if (response.ok) {
        this._onNewData.next(response.json())
      }
      return response
    })
  }


  put(object: T): Observable<Response> {
    console.info(object)
    let observable = this.http.put(object._links.self.href, object)
    return observable.map(response => {
      if (response.ok) {
        this._onEditData.next(response.json())
      }
      return response
    })
  }

  delete(object: T): Observable<Response> {
    return this.http.delete(object._links.self.href)
  }

  // TODO more clear API onLoadAll vs search?
  search(searchObject: any) {
    let params = this.mapObjectToSearchParams(searchObject)
    this.http.get(this.URL, {search: params}).map(_ => this.toJson(_)).subscribe((values) => {
      this._onLoadAll.next(values)
    });

  }

  mapObjectToSearchParams(searchObject: any): URLSearchParams {
    let params = new URLSearchParams()
    for (let k in searchObject) {
      let value: any = searchObject[k]
      params.append(k, value.toString())
    }
    return params
  }

  toJson(r: Response): Array<T> {
    try {
      let json = r.json()
      console.debug(json)
      return json._embedded[`${this.resourceRel}`]

    } catch (e) {
      console.error(e)
      return []
    }
  }

  extractID(object: SpringRestModel): string {
    let url = object._links.self.href
    let array = url.split("/")
    let last = array[array.length - 1]
    return last
  }
}
