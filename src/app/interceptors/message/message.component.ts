import { Component, OnInit } from '@angular/core'
import { MessageService } from '../../common/message.service'
import { Http } from '@angular/http'

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  constructor(public messageService: MessageService, private http: Http) { }

  ngOnInit() {
  }

  getText() {
    const messageNumber = this.getRandomInt(1, 4)
    this.http.get(`assets/data/message${messageNumber}.json`).subscribe((r) => {
      console.info(r.json())
    })
  }

  simulateError() {
    this.http.get('notfound').subscribe()
  }

  private getRandomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min)) + min
  }

}
