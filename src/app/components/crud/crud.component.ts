import { Component, ViewChild } from '@angular/core'
import { AbstractCrudComponent, AbstractFormComponent } from '../../vader/crud'
import { PessoaService } from './pessoa.service'
import { PessoaModel } from './pessoa.model'
import { NotificationService } from '../../vader/common/notification.service'
import { Columns } from '../../vader/crud/data-table/data-table.component'
import { CrudFormComponent } from './crud-form/crud-form.component'

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

  @ViewChild(CrudFormComponent)
  form: CrudFormComponent


  constructor(pessoaService: PessoaService, notificationService: NotificationService) {
    super(pessoaService, notificationService)
  }

  getForm(): AbstractFormComponent<PessoaModel> {
    return this.form;
  }




}
