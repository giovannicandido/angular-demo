import { Component, OnInit } from '@angular/core'
import { Http } from '@angular/http'
import { LoadingInterceptor } from '../loading/loading-interceptor'

@Component({
  selector: 'app-loading-page',
  templateUrl: './loading-page.component.html',
  styleUrls: ['./loading-page.component.css']
})
export class LoadingPageComponent implements OnInit {
  response: string

  constructor(private http: Http, public loadingInterceptor: LoadingInterceptor) {
  }

  ngOnInit() {
  }

  perform() {
    this.http.get(' assets/data/response.txt')
      .subscribe(r => this.response = r.text())
  }

}
