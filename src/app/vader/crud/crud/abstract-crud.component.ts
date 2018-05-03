import { AfterViewInit, EventEmitter, OnDestroy, Output, ViewChild } from '@angular/core'
import { DataTableComponent } from '../data-table/data-table.component'
import { ModalComponent } from '../modal/modal.component'
import { Subscription } from 'rxjs/Subscription'
import { AbstractFormComponent } from './abstract-form.component'
import { RestService } from '../rest.service'
import { NotificationService } from '../../common/notification.service'
import { Observable } from 'rxjs/Observable'

/**
 * Every CRUD Component has a datatable, a modal and a Form
 * This class provide common behavior and attach all components events together
 * @author Giovanni Silva
 */

export abstract class AbstractCrudComponent<T> implements AfterViewInit, OnDestroy {

  @ViewChild(DataTableComponent) dataTable: DataTableComponent
  @ViewChild(ModalComponent) modal: ModalComponent

  @Output()
  onDataSubmitted: EventEmitter<DataSubmited> = new EventEmitter()

  /**
   * This method is called before saving the form
   * It can be used to transform data, or perform other http operations.
   * The method must return a observable with the data to be saved
   * @param data
   * @returns {Observable<any>}
   */
  protected preSave(data: any): Observable<any> {
    return null;
  }

  protected subscriptions: Subscription[] = []

  /**
   * Every App component has its own form implementation
   */
  abstract getForm(): AbstractFormComponent

  constructor(protected service: RestService<any>, protected notificationService: NotificationService) {
  }

  /**
   * Initialize default actions for CRUD operations
   * TODO a any break in code below, and CRUD stop. Example: The confirmation dialog need a p-confirmation in the application
   * if not cause the onDeleteAction to stop and any subscription bellow like formSubscriptions to stop as well
   */
  ngOnInit() {

    let dataTableSubscriptions = [
      this.dataTable.onEditAction.subscribe(value => {
        this.getForm().load(value)
        this.modal.confirmButtonDisabled = false
        this.modal.show()
      }),
      this.dataTable.onNewAction.subscribe(value => {
        this.getForm().reset()
        this.modal.confirmButtonDisabled = false
        this.modal.show()
      }),
      this.dataTable.onViewAction.subscribe(value => {
        this.getForm().load(value);
        this.getForm().makeReadOnly();
        this.modal.confirmButtonDisabled = true
        this.modal.show()
      }),
      this.dataTable.onDeleteAction.subscribe(value => {
        this.service.delete(value).subscribe((response) => {
          if (response.status == 204) {
            this.dataTable.remove(value)
            this.notificationService.showMessage({detail: 'Registro deletado com sucesso'})
          } else {
            this.notificationService.showMessage({severity: 'warn', detail: 'Falha ao remover registro'})
          }
        })
      }),
      this.dataTable.onRefreshAction.subscribe(value => {
        this.service.loadAll().subscribe()
      }),
      this.dataTable.onSearchAction.subscribe(value => {
        this.service.search(value)
      })

    ]

    let formSubscriptions = [
      this.getForm().onSubmit.subscribe((value) => {
        const transformed = this.preSave(value)
        if (transformed) {
          this.performSubmit(transformed)
        } else {
          this.performSubmit(value)
        }
      })
    ]

    let modalSubscriptions = [
      this.modal.onConfirmAction.subscribe(() => {
        this.getForm().submit()
      })
    ]
    let serviceSubscriptions = [
      this.service.onNewData.subscribe((value) => this.dataTable.add(value)),
      this.service.onEditData.subscribe((value) => this.dataTable.update(value)),
      this.service.onLoadAll.subscribe(value => this.dataTable.initData(value))
    ]


    this.subscriptions = [...dataTableSubscriptions, ...formSubscriptions, ...modalSubscriptions, ...serviceSubscriptions]
  }

  performSubmit(value) {
    let observable = value.editing ? this.service.put(value.data) : this.service.post(value.data)
    observable.subscribe((response) => {
      if (response.ok) {
        if (value.closeModal) {
          this.getForm().reset()
          this.modal.hide()
        }
        // TODO review the onDataSubmitted event send
        this.notificationService.showMessage({detail: 'Registro salvo com sucesso'})
        this.onDataSubmitted.emit({data: response.json(), error: '', success: true})
      } else {
        this.notificationService.showMessage({severity: 'warn', detail: 'Falha ao salvar registro'})
        this.onDataSubmitted.emit({data: value, error: response.text(), success: false})

      }
    })
  }

  /**
   * Attach to events after the CRUD components are wired
   */
  ngAfterViewInit() {

    this.service.loadAll().subscribe()

  }

  /**
   * Clean events
   */
  ngOnDestroy() {
    for (let sub of this.subscriptions) {
      sub.unsubscribe()
    }
  }

}

export interface DataSubmited {
  data: any
  success: boolean
  error: string
}
