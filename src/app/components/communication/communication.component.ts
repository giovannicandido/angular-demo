import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-communication',
  templateUrl: './communication.component.html',
  styleUrls: ['./communication.component.css']
})
export class CommunicationComponent implements OnInit {

  example1 = `
    <div (click)="bla()" class="fuck">
      <p>Now is</p>
    </div>
  `

  constructor() {
  }

  ngOnInit() {
  }

  show() {
    console.info('show is running')
  }

}
