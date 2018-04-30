import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { OauthComponent } from './oauth.component'
import { TitleComponent } from '../../common/title/title.component'
import { RandomMessageService } from '../../common/services/random-message.service'
import { HttpModule, XHRBackend } from '@angular/http'
import { MockBackend } from '@angular/http/testing'

describe('OauthComponent', () => {
  let component: OauthComponent
  let fixture: ComponentFixture<OauthComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule
      ],
      declarations: [OauthComponent, TitleComponent],
      providers: [
        RandomMessageService,
        {
          provide: XHRBackend,
          useClass: MockBackend
        }
      ]
    })
      .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(OauthComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
