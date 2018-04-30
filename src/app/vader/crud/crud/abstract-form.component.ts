import { AbstractControl, FormControl, NgForm } from '@angular/forms'
import { EventEmitter, Output, ViewChild } from '@angular/core'
import { Response } from "@angular/http"
import { NotificationService } from "../../common/notification.service"
import { Logger } from "angular-spa/logger"
import { SubmitEvent } from "./crud-interfaces"
import { RestService } from "../rest.service";
import { DataSubmited } from "./abstract-crud.component";
import { SpringRestModel } from "../spring-rest-model";

/**
 * @author Giovanni Silva
 */

export abstract class AbstractFormComponent<T extends SpringRestModel> {

  editing: boolean = false
  disabled: boolean = false

  @ViewChild(NgForm) form: NgForm

  @Output()
  afterSubmit: EventEmitter<DataSubmited> = new EventEmitter()

  constructor(protected notificationService: NotificationService,
              protected logger: Logger,
              protected service: RestService<T>) {
  }

  ngOnInit() {
    this.logger.debug("NgOnInit AbstractForm")

    if (this.form == null) {
      this.logger.error("There is no **NgForm** child in AbstractFormComponent, please add one. This can also mean " +
        "FormModule is not imported in current module")
    }
  }

  /**
   * Validates and submit the form
   */
  submit() {
    console.debug("dispatchSubmit")
    if (this.form.valid) {
      this.doSubmit({editing: this.editing, data: this.form.value})
    } else {
      this.markAllDirty(this.form.control)
      this.notificationService.showMessage({detail: 'Formulário inválido', severity: 'warn'})
    }
  }

  /**
   * Perform Form submit no validation
   * @param value
   */
  doSubmit(value: SubmitEvent<T>) {
    console.debug("doSubmit for value:")
    console.debug(value)
    let observable = value.editing ? this.service.put(value.data) : this.service.post(value.data)
    observable.subscribe((response) => {
      console.debug(response)
      if (response.ok) {
        // TODO review the onDataSubmitted event send
        this.notificationService.showMessage({detail: 'Registro salvo com sucesso'})
        this.afterSubmit.emit({data: response.json(), error: '', success: true})
      } else {
        this.catchError(value, response)

      }
    }, (error) => {
      this.catchError(value, error)
    })
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

  validate(): boolean {
    if (!this.form.valid) {
      this.markAllDirty(this.form.control)
    }
    return this.form.valid
  }

  /**
   * TODO To catch errors in a global way. Remove this notificationService and use a interceptor
   * @param value
   * @param {Response} error
   */
  private catchError(value, error: Response) {
    this.notificationService.showMessage({severity: 'warn', summary: 'Falha ao salvar registro', detail: error.text()})
    this.afterSubmit.emit({data: value, error: error.text(), success: false})
  }


}
