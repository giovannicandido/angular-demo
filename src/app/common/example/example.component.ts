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

  _code: string

  constructor() {
  }

  get code() {
    return this._code
  }

  @Input()
  set code(code: string) {
    this._code = Prism.highlight(code, Prism.languages.html, Prism.languages.html)
  }

}


