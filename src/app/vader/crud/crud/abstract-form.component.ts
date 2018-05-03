import { AbstractControl, FormControl, NgForm } from '@angular/forms'
import { EventEmitter, Output, ViewChild } from '@angular/core'
import { NotificationService } from '../../common/notification.service'
import { Logger } from 'angular-spa/logger'
import { SubmitEvent } from './crud-interfaces'

/**
 * @author Giovanni Silva
 */

export abstract class AbstractFormComponent<T> {

  editing: boolean = false
  disabled: boolean = false

  @ViewChild(NgForm) form: NgForm

  @Output()
  onSubmit: EventEmitter<SubmitEvent<any>> = new EventEmitter()

  constructor(protected notificationService: NotificationService, protected logger: Logger) {
  }

  ngOnInit() {
    this.logger.debug("NgOnInit AbstractForm")

    if (this.form == null) {
      this.logger.error("There is no **NgForm** child in AbstractFormComponent, please add one. This can also mean " +
        "FormModule is not imported in current module")
    }
  }

  submit(closeModal = true) {
    this.doSubmit(this.form.value, closeModal)
  }

  reset() {
    this.editing = false
    this.unmakeReadOnly()
    this.form.resetForm()
  }

  load(data: any) {
    this.editing = true
    this.unmakeReadOnly()
    this.form.resetForm(data)
  }

  makeReadOnly() {
    this.disabled = true
  }

  unmakeReadOnly() {
    this.disabled = false
  }

  doSubmit(value: any, closeModal = true) {
    if (this.form.valid) {
      this.onSubmit.next({data: value, editing: this.editing, closeModal: closeModal})
    } else {
      this.markAllDirty(this.form.control)
      this.notificationService.showMessage({detail: 'Formulário inválido', severity: 'warn'})
    }
  }

  getValue() {
    return this.form.value
  }

  markAllDirty(control: AbstractControl) {
    if (control.hasOwnProperty('controls')) {
      control.markAsDirty({onlySelf: true}) // mark group
      let ctrl = <any>control;
      for (let inner in ctrl.controls) {
        this.markAllDirty(ctrl.controls[inner] as AbstractControl);
      }
    }
    else {
      (<FormControl>(control)).markAsDirty({onlySelf: true});
    }
  }

}
