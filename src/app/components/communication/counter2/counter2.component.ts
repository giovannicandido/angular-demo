import { Component, OnInit } from '@angular/core'
import { CounterService } from '../counter.service'

@Component({
  selector: 'app-counter2',
  templateUrl: './counter2.component.html',
  styleUrls: ['./counter2.component.css']
})
export class Counter2Component implements OnInit {

  constructor(public counterService: CounterService) {
  }

  ngOnInit() {
  }

  click() {
    this.counterService.sum()
  }

}
