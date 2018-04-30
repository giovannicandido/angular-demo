import { RestService } from '../../vader/crud'
import { PessoaModel } from './pessoa.model'
import { Http } from '@angular/http'
import { Injectable } from '@angular/core'

@Injectable()
export class PessoaService extends RestService<PessoaModel> {
  constructor(http: Http) {
    super(http)
  }

  get URL(): string {
    return '/api/pessoa'
  }

  get resourceRel(): string {
    return 'pessoas'
  }

}
