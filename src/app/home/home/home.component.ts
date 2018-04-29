import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  statistics = [
    {
      title: 'New Registrations',
      total: 14138,
      percentage: 0.08,
      up: true
    }, {
      title: 'Website traffic',
      total: 123238,
      percentage: 0.13,
      up: false
    }, {
      title: 'Total invoices',
      total: 26985,
      percentage: 0.32,
      up: true
    }, {
      title: 'Total income',
      total: 23000,
      percentage: 0.08,
      up: false
    },
  ]

  constructor() {
  }

  ngOnInit() {
  }

}
