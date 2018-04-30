import { Component, OnInit } from '@angular/core'
import { AbstractCrudComponent } from '../../vader/crud'
import { PessoaService } from './pessoa.service'
import { PessoaModel } from './pessoa.model'
import { NotificationService } from '../../vader/common/notification.service'
import { Router } from '@angular/router'
import { Columns } from '../../vader/crud/data-table/data-table.component'

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent extends AbstractCrudComponent<PessoaModel> {
  cols: Columns[] = [
    {
      field: 'nome',
      header: 'Nome'
    }, {
      field: 'email',
      header: 'Email'
    }
  ]
  constructor(pessoaService: PessoaService, notificationService: NotificationService, router: Router) {
    super(pessoaService, notificationService, router)
  }

  getNewRouteUrl(): Array<any> {
    return ['crud/new']
  }


}
