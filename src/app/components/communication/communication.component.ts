import {Component, OnInit, ViewChild} from '@angular/core'
import {CounterComponent} from './counter/counter.component'
import {CounterService} from './counter.service'

@Component({
  selector: 'app-communication',
  templateUrl: './communication.component.html',
  styleUrls: ['./communication.component.css']
})
export class CommunicationComponent implements OnInit {

  example1 = [
    {
      code: `
<app-counter (onNewNumber)="second.counter = $event"></app-counter>
<app-counter #second></app-counter>
`,
      language: 'html'
    }
  ]

  example2 = [
    {
      code: `
<app-counter #viewChild></app-counter>
<app-counter #viewChild2></app-counter>
`,
      language: 'html'
    }, {
      code: `
@ViewChild('viewChild')
appCounter: CounterComponent

@ViewChild('viewChild2')
appCounter2: CounterComponent

ngOnInit() {
  this.appCounter.onNewNumber.subscribe(n => this.appCounter2.counter = n % 2)
}`,
      language: 'javascript'
    }
  ]

  example3 = [
    {
      code: `
<app-counter2></app-counter2>
<app-counter2></app-counter2>

<p>Current counter service value</p>

{{counterService.counter}}
`,
      language: 'html'
    }, {
      code: `
<div class="uk-child-width-expand@s" uk-grid>
  <div class="uk-grid-item-match">
    <p class="uk-width-1-4@m">{{counterService.counter}}</p>
    <button class="uk-width-1-3@m uk-button uk-button-default" (click)="click()">Click me</button>
  </div>
</div>
     
      `,
      language: 'html'
    }
  ]

  @ViewChild('viewChild')
  appCounter: CounterComponent

  @ViewChild('viewChild2')
  appCounter2: CounterComponent

  constructor(public counterService: CounterService) {
  }

  ngOnInit() {
    this.appCounter.onNewNumber.subscribe(n => this.appCounter2.counter = n % 2)
  }


}
