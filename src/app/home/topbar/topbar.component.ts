import { Component, EventEmitter, OnInit, Output } from '@angular/core'

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  @Output()
  onMenuClick = new EventEmitter()

  constructor() {
  }

  ngOnInit() {
  }


}
