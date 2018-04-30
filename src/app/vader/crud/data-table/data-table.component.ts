import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core"
import { NotificationService } from "../../common/notification.service"
import { ConfirmationService, MenuItem } from "primeng/primeng"
import { SpringRestModel } from "../spring-rest-model"

@Component({
  selector: 'vader-data-table',
  styles: [
      `:host {
      display: inline-block
    }`
  ],
  templateUrl: './data-table.component.html'
})
export class DataTableComponent<T extends SpringRestModel> implements OnInit {

  @Input()
  options = {
    search: false,
    actions: true
  }
  @Output()
  onRowSelect: EventEmitter<T> = new EventEmitter()
  @Output()
  onRowUnselect: EventEmitter<T> = new EventEmitter()
  selected: T
  menuItems: MenuItem[];
  @Input()
  cols: Columns[] = []
  @Input()
  searchObject

  @Input()
  selectionMode: 'single' | 'multiple' = 'single'

  @Output()
  onNewAction = new EventEmitter()
  @Output()
  onEditAction: EventEmitter<T> = new EventEmitter()
  @Output()
  onDeleteAction: EventEmitter<T> = new EventEmitter()
  @Output()
  onRefreshAction: EventEmitter<T> = new EventEmitter()
  @Output()
  onSearchAction: EventEmitter<T> = new EventEmitter()
  @Output()
  onViewAction: EventEmitter<T> = new EventEmitter()


  constructor(private notificationService: NotificationService, private confirmationService: ConfirmationService) {
  }

  protected _data: T[] = []

  @Input()
  get data(): T[] {
    return this._data
  }

  set data(data) {
    this._data = data
  }

  ngOnInit() {
    this.menuItems = this.options.actions ? [
      {label: 'Visualizar', icon: 'fa-eye', command: (event) => this.onView()},
      {label: 'Editar', icon: 'fa-pencil', command: (event) => this.onEdit()},
      {label: 'Deletar', icon: 'fa-trash', command: (event) => this.onDelete()}
    ] : []
  }

  onEdit() {
    this.executeForSelected(selected => this.onEditAction.next(selected))
  }

  onView() {
    this.executeForSelected(selected => this.onViewAction.next(selected))
  }

  onDelete() {
    this.executeForSelected((selected) => {
      this.confirmationService.confirm({
        message: 'Deseja deletar o registro',
        accept: () => {
          this.onDeleteAction.next(this.selected)
        }
      })
    })
  }

  search() {
    this.onSearchAction.emit(this.searchObject)
  }

  add(data: T) {
    this._data = [...this._data, data]
  }

  remove(data: T) {
    const index = this._data.indexOf(data)
    if (index > -1) {
      this._data = this._data.filter((element) => {
        return data !== element
      })
    }
  }

  executeForSelected(fn: (selected: any) => void) {
    if (this.selected == null || this.selected === undefined) {
      this.notificationService.showMessage({detail: 'Selecione um registro'})
    } else {
      fn(this.selected)
    }
  }

  initData(data: T[]) {
    this._data = data
  }

  update(data: T) {

    const object = this._data.find(_ => _['_links']['self']['href'] === data._links.self.href)

    if (object) {
      this._data = this._data.map((element) => {
        if (element['_links']['self']['href'] === data._links.self.href) {
          return data;
        } else {
          return element
        }
      })
    }

  }

}

export interface Columns {
  field: string,
  header: string
}
