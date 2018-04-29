import { Component, OnInit } from '@angular/core'
import { RandomMessageService } from '../../common/services/random-message.service'

@Component({
  selector: 'app-oauth',
  templateUrl: './oauth.component.html',
  styleUrls: ['./oauth.component.css']
})
export class OauthComponent implements OnInit {

  constructor(private randomMessageService: RandomMessageService) {
  }

  ngOnInit() {
  }

  getText() {
    this.randomMessageService.getMessage().subscribe()
  }

}
