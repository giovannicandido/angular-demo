import { Component, ElementRef, OnInit, ViewChild } from '@angular/core'
import { AuthService } from 'angular-spa'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  @ViewChild('content')
  contentRef: ElementRef

  constructor(private authService: AuthService) {

  }

  ngOnInit() {
  }

  login() {
    this.authService.login()
  }

  moveContentLeft() {
    this.contentRef.nativeElement.classList.remove('content-padder')
  }

  moveContentRight() {
    this.contentRef.nativeElement.classList.add('content-padder')
  }
}
