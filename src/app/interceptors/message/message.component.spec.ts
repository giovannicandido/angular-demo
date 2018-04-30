import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { MessageComponent } from './message.component'
import { TitleComponent } from '../../common/title/title.component'
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { HttpModule, XHRBackend } from '@angular/http'
import { MockBackend } from '@angular/http/testing'
import { RandomMessageService } from '../../common/services/random-message.service'

describe('MessageComponent', () => {
  let component: MessageComponent
  let fixture: ComponentFixture<MessageComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule
      ],
      declarations: [MessageComponent, TitleComponent],
      providers: [
        {
          provide: XHRBackend,
          useClass: MockBackend
        }, RandomMessageService
      ]
    })
      .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
