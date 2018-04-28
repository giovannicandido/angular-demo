import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {state, trigger, style, animate, transition} from '@angular/animations';
import {HideEvent} from './hide-event';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css'],
  animations: [
    trigger('heroState', [
      state('inactive', style({
        backgroundColor: '#eee',
        transform: 'scale(1)'
      })),
      state('active',   style({
        backgroundColor: '#cfd8dc',
        transform: 'scale(1.1)'
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ]),
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
  private show = true;

  @Output()
  onHide = new EventEmitter();

  @Output()
  onShow = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  toggle() {
    this.show = !this.show;
    if (this.show) {
      this.onShow.emit();
    } else {
      this.onHide.emit();
    }
  }

}
