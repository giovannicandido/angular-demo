import { async, ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing'

import { DirectivesComponent } from './directives.component'
import { TitleComponent } from '../../common/title/title.component'
import { ExampleComponent } from '../../common/example/example.component'
import { AuthModule, AuthService, InitOptions } from 'angular-spa'
import { KeepHtmlPipe } from '../../common/pipes/keep-html.pipe'
import { MessageService } from '../../common/message.service'
import { NoopAnimationsModule } from '@angular/platform-browser/animations'

describe('DirectivesComponent', () => {
  let component: DirectivesComponent
  let fixture: ComponentFixture<DirectivesComponent>
  const fakeAuthService = {}
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AuthModule,
        NoopAnimationsModule
      ],
      declarations: [DirectivesComponent, TitleComponent, ExampleComponent, KeepHtmlPipe],
      providers: [
        MessageService,
        // {
        //   provide: AuthService,
        //   useValue: fakeAuthService
        // },
        {
          provide: InitOptions,
          useValue: {
            url: 'http://localhost:9080/auth',
            realm: 'master',
            clientId: 'angular-demo'
          }
        }
      ]
    })
      .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectivesComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', fakeAsync(() => {
    expect(component).toBeTruthy()
  }))
})
