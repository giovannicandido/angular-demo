import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { NotificationService } from '../../common/notification.service'
import { ConfirmationService, MenuItem } from 'primeng/primeng'
import { SpringRestModel } from '../spring-rest-model'

@Component({
  selector: 'vader-data-table',
  templateUrl: './data-table.component.html'
})
export class DataTableComponent implements OnInit {

  @Input()
  options = {
    search: false,
    actions: true
  }
  protected _data: any[] = []

  @Input()
  get data(): any[] {
    return this._data
  }

  set data(data) {
    this._data = data
  }

  @Output()
  onRowSelect: EventEmitter<any> = new EventEmitter()
  @Output()
  onRowUnselect: EventEmitter<any> = new EventEmitter()

  selected: any

  menuItems: MenuItem[];

  @Input()
  cols: Columns[] = []

  @Input()
  searchObject

  @Output()
  onNewAction = new EventEmitter()

  @Output()
  onEditAction: EventEmitter<any> = new EventEmitter()

  @Output()
  onDeleteAction: EventEmitter<any> = new EventEmitter()

  @Output()
  onRefreshAction: EventEmitter<any> = new EventEmitter()

  @Output()
  onSearchAction: EventEmitter<any> = new EventEmitter()

  @Output()
  onViewAction: EventEmitter<any> = new EventEmitter()

  constructor(private notificationService: NotificationService, private confirmationService: ConfirmationService) {
  }

  ngOnInit() {
    this.menuItems = this.options.actions ? [
      {label: 'Visualizar', icon: 'ui-icon-visibility', command: (event) => this.onView()},
      {label: 'Editar', icon: 'ui-icon-create', command: (event) => this.onEdit()},
      {label: 'Deletar', icon: 'ui-icon-delete', command: (event) => this.onDelete()}
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

  add(data: any) {
    this._data = [...this._data, data]
  }

  remove(data: any) {
    const index = this._data.indexOf(data)
    if (index > -1) {
      this._data = this._data.filter((element) => {
        return data !== element
      })
    }
  }

  executeForSelected(fn: (selected) => void) {
    if (this.selected == null || this.selected === undefined) {
      this.notificationService.showMessage({detail: 'Selecione um registro'})
    } else {
      fn(this.selected)
    }
  }

  initData(data: any[]) {
    this._data = data
  }

  update(data: SpringRestModel) {

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
