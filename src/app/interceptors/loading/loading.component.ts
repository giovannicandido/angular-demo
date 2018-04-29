import { Component, OnInit } from '@angular/core'
import { LoadingInterceptorService } from './loading-interceptor.service'

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {

  constructor(public service: LoadingInterceptorService) {
  }

  ngOnInit() {
  }

}
