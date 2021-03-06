import { Component } from '@angular/core'
import { AbstractFormComponent } from '../../../vader/crud'
import { PessoaModel } from '../pessoa.model'
import { NotificationService } from '../../../vader/common/notification.service'
import { Logger } from 'angular-spa/logger'

@Component({
  selector: 'app-crud-form',
  templateUrl: './crud-form.component.html',
  styleUrls: ['./crud-form.component.css']
})
export class CrudFormComponent extends AbstractFormComponent<PessoaModel> {

  constructor(notificationService: NotificationService,
              logger: Logger) {
    super(notificationService, logger)
  }

}
