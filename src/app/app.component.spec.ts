import { async, TestBed } from '@angular/core/testing'
import { AppComponent } from './app.component'
import { TopbarComponent } from './home/topbar/topbar.component'
import { SidemenuComponent } from './home/sidemenu/sidemenu.component'
import { RouterTestingModule } from '@angular/router/testing'
import { AuthService } from 'angular-spa'

describe('AppComponent', () => {

  const fakeAuth: AuthService = <any> {}

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        TopbarComponent,
        SidemenuComponent
      ],
      providers: [
        {
          provide: AuthService,
          useValue: fakeAuth
        }
      ]
    }).compileComponents()
  }))
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.debugElement.componentInstance
    expect(app).toBeTruthy()
  }))

})
