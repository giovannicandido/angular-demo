import { Component, OnInit } from '@angular/core'
import { Http } from '@angular/http'
import { RandomMessageService } from '../../common/services/random-message.service'

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {


  constructor(private http: Http, private randomMessageService: RandomMessageService) { }

  ngOnInit() {
  }

  getText() {
    this.randomMessageService.getMessage().subscribe(r => {
      console.info(r)
    })
  }

  simulateError() {
    this.http.get('notfound').subscribe()
  }



}
