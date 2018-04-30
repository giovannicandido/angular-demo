import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'vader-page-filter-actions',
  templateUrl: './page-filter-actions.component.html',
  styleUrls: ['./page-filter-actions.component.css']
})
export class PageFilterActionsComponent implements OnInit {

  @Output()
  onFilter = new EventEmitter()

  @Output()
  onClean = new EventEmitter()

  constructor() {
  }

  ngOnInit() {
  }

}
