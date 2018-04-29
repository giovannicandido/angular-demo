import { Component, OnInit } from '@angular/core'
import { MessageService } from '../../common/message.service'

import { transition, trigger, useAnimation } from '@angular/animations'
import { bounceOutUp } from 'ng-animate'


@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css'],
  animations: [
    trigger('destroy', [transition('normal => destroy', useAnimation(bounceOutUp, {
      params: {timing: 6}
    }))])
  ],
})
export class DirectivesComponent implements OnInit {
  destroyState = 'normal'

  constructor(private messageService: MessageService) {
  }

  ngOnInit() {
  }

  launchNuclearAttack() {
    this.messageService.confirm('This will destroy the world!', () => {
      this.destroyState = 'destroy'
    })
  }

  resetPassword() {
    this.messageService.show({detail: 'Reset password', level: 'info'})
  }

}
