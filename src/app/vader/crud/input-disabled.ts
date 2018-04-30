import {Directive, ElementRef, Input} from "@angular/core"

/**
 * Directive to disable a form input or field based on boolean expression
 * @author Giovanni Silva
 */
@Directive({
  selector: '[vaderDisabled]'
})
export class InputDisabledDirective {

  constructor(private el: ElementRef) {

  }

  @Input('vaderDisabled')
  set disabled(disable: boolean) {
    if (disable) {
      this.disableElement()
    } else {
      this.enableElement()
    }
  }

  disableElement() {
    this.el.nativeElement.disabled = 'disabled'
  }

  enableElement() {
    this.el.nativeElement.removeAttribute('disabled')
  }

}
