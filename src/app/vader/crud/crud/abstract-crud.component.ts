import {AfterViewInit, OnDestroy, ViewChild} from '@angular/core'
import {DataTableComponent} from '../data-table/data-table.component'
import {ModalComponent} from '../modal/modal.component'
import {Subscription} from 'rxjs/Subscription'
import {RestService} from '../rest.service'
import {NotificationService} from '../../common/notification.service'
import {Observable} from "rxjs/Observable"
import {Router} from "@angular/router";
import { SpringRestModel } from "../spring-rest-model";

/**
 * Every CRUD Component has a datatable, a modal and a Form
 * This class provide common behavior and attach all components events together
 * @author Giovanni Silva
 */

export abstract class AbstractCrudComponent<T extends SpringRestModel> implements AfterViewInit, OnDestroy {

  @ViewChild(DataTableComponent) dataTable: DataTableComponent<T>
  @ViewChild(ModalComponent) modal: ModalComponent
  protected subscriptions: Subscription[] = []

  constructor(protected service: RestService<any>,
              protected notificationService: NotificationService,
              protected router: Router) {
  }

  /**
   * Every App component a url to Form Component
   */
  abstract getNewRouteUrl(): Array<any>

  getEditRouteUrl(value): Array<any> {
    let route = this.getNewRouteUrl().slice(0, 1)
    route.push(this.service.extractID(value))
    return route;
  }

  /**
   * Initialize default actions for CRUD operations
   * TODO any break in code below, and CRUD stop. Example: The confirmation dialog need a p-confirmation in the application
   * if not cause the onDeleteAction to stop and any subscription bellow like formSubscriptions to stop as well
   */
  ngOnInit() {
    let dataTableSubscriptions = [
      this.dataTable.onEditAction.subscribe(value => {
        this.router.navigate(this.getEditRouteUrl(value))
      }),
      this.dataTable.onNewAction.subscribe(value => {
        this.router.navigate(this.getNewRouteUrl())
      }),
      this.dataTable.onViewAction.subscribe(value => {
        this.router.navigate(this.getEditRouteUrl(value))
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


    let serviceSubscriptions = [
      this.service.onNewData.subscribe((value) => this.dataTable.add(value)),
      this.service.onEditData.subscribe((value) => this.dataTable.update(value)),
      this.service.onLoadAll.subscribe(value => this.dataTable.initData(value))
    ]


    this.subscriptions = [...dataTableSubscriptions, ...serviceSubscriptions]
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

}

export interface DataSubmited {
  data: any
  success: boolean
  error: string
}
