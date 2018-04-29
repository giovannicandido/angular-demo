import { Component, EventEmitter, OnInit, Output } from '@angular/core'
import { animate, state, style, transition, trigger } from '@angular/animations'

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css'],
  animations: [
    trigger('flyInOut', [
      state('in', style({opacity: 1, transform: 'translateX(0)'})),
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateX(-100%)'
        }),
        animate('0.2s ease-in')
      ]),
      transition('* => void', [
        animate('0.2s 0.1s ease-out', style({
          opacity: 0,
          transform: 'translateX(-100%)'
        }))
      ])
    ])
  ]
})
export class SidemenuComponent implements OnInit {
  show = true

  @Output()
  onHide = new EventEmitter()

  @Output()
  onShow = new EventEmitter()

  constructor() {
  }

  ngOnInit() {
  }

  toggle() {
    this.show = !this.show
    if (this.show) {
      this.onShow.emit()
    } else {
      this.onHide.emit()
    }
  }

}
