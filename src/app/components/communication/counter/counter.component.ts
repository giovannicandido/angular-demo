import {Component, Input, OnInit, Output} from '@angular/core'
import {range} from 'rxjs/observable/range'
import {Observable} from 'rxjs/Observable'
import {Subject} from 'rxjs/Subject'

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  from = 0
  to = 10
  interval = 100

  _counter = 0

  @Input()
  autoStart = false

  private source: Subject<number> = new Subject<number>()


  @Output()
  get onNewNumber(): Observable<number> {
    return this.source.asObservable()
  }

  get counter() {
    return this._counter
  }

  set counter(count: number) {
    this._counter = count
    this.source.next(this._counter)
  }

  constructor() {
  }

  // FIXME bug event is - 1
  click() {
    this.source.next(this.counter++)
  }

  ngOnInit(): void {
  }
}
