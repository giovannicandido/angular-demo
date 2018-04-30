import { Http, Response, URLSearchParams } from "@angular/http"
import { Observable } from "rxjs/Observable"
import { Subject } from "rxjs/Subject"
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise';
import { SpringRestModel } from "./spring-rest-model"

/**
 * CRUD abstraction for rest services, specially Spring Data Rest Services
 * @author Giovanni Silva
 */
export abstract class RestService<T extends SpringRestModel> {

  constructor(protected http: Http) {
  }

  abstract get URL(): string

  abstract get resourceRel(): string

  protected _onNewData = new Subject<T>()

  get onNewData(): Observable<T> {
    return this._onNewData.asObservable()
  }

  protected _onEditData = new Subject<T>()

  get onEditData(): Observable<T> {
    return this._onEditData.asObservable()
  }

  protected _onLoadAll = new Subject<Array<T>>()

  get onLoadAll(): Observable<Array<T>> {
    return this._onLoadAll.asObservable()
  }

  // TODO loadAll and onLoadAll?
  loadAll(projection?: string): Observable<Array<T>> {

    let searchParams = new URLSearchParams()
    if (projection) {
      searchParams.set("projection", projection)
    }

    return this.http.get(this.URL, {params: searchParams}).map(_ => this.toJson<T>(_)).map((values) => {
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
  search(searchObject: any): Observable<Array<T>> {
    let params = this.mapObjectToSearchParams(searchObject)
    let subscription = this.http.get(this.URL, {search: params}).map(_ => this.toJson<T>(_))
    subscription.subscribe((values) => {
      this._onLoadAll.next(values)
    });
    return subscription

  }

  mapObjectToSearchParams(searchObject: any): URLSearchParams {
    let params = new URLSearchParams()
    for (let k in searchObject) {
      let value: any = searchObject[k]
      params.append(k, value.toString())
    }
    return params
  }

  /**
   * Parse the Spring Rest response in a JSON Object
   * TODO Better error and Logging (see: https://github.com/atende/angular-spa/issues/22 for a plan)
   * @param {Response} r
   * @param {string} resourceRel
   * @returns {Array<E>}
   */
  toJson<E>(r: Response, resourceRel?: string): Array<E> {

    if (resourceRel == null || undefined) {
      resourceRel = this.resourceRel
    }

    try {
      let json = r.json()
      if (!json.hasOwnProperty('_embedded')) {
        throw new Error('The response from server has no _embedded key, is this a Spring Data Rest Response?')
      }

      if (!json._embedded.hasOwnProperty(resourceRel)) {
        throw new Error(`The RestService class of URL "${this.URL}" object has no key "${resourceRel}", 
        is this the correct resourceRel for the RestService class? `)
      }
      return json._embedded[`${resourceRel}`]

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
