/**
 * Every model should have an id
 * @author Giovanni Silva
 */
export class SpringRestModel {
  _links: SpringRestLinks = <any>{}
}

export interface SpringRestLinks {
  self: Href
}

export interface Href {
  href: string
}
