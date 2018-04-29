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

  example1 = `
  <div *secIsAuthenticated>
   You are Authenticated
  </div>
  `

  example2 = `<div *secHasRole="'president'">
  You are The President
  <button class="uk-button uk-button-danger" (click)="launchNuclearAttack()">Launch Nuclear Attack</button>
</div>

<div *secHasRole="'admin'">
  You are admin
  <button class="uk-button uk-button-danger" (click)="resetPassword()">Reset Password</button>
</div>
  `

  example3 = `<p>
  Are you the President?
  <button *secHasRole="'president'; action 'addClass'" class="uk-button uk-button-danger"
          (click)="launchNuclearAttack()">Launch Nuclear Attack
  </button>
</p>
<p>
  You are admin?
  <button *secHasRole="'admin'; action 'addClass'" class="uk-button uk-button-secondary"
          (click)="resetPassword()">Reset Password
  </button>
</p>
  `

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
