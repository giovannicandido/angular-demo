import { Component, Input } from '@angular/core'
import * as Prism from 'prismjs'

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent {

  @Input()
  title: string

  @Input()
  description: string

  _code: Code[]

  constructor() {
  }

  get code(): Code[] {
    return this._code
  }

  @Input()
  set code(code: Code[]) {
    for (const c of code) {
      c.code = Prism.highlight(c.code, Prism.languages[c.language], Prism.languages[c.language])
    }
    this._code = code
  }

}

export interface Code {
  code: string,
  language: string
}


