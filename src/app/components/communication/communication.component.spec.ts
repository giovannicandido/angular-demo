import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { CommunicationComponent } from './communication.component'
import { TitleComponent } from '../../common/title/title.component'
import { ExampleComponent } from '../../common/example/example.component'
import { KeepHtmlPipe } from '../../common/pipes/keep-html.pipe'
import { CounterComponent } from './counter/counter.component'
import { Counter2Component } from './counter2/counter2.component'
import { CounterService } from './counter.service'

describe('CommunicationComponent', () => {
  let component: CommunicationComponent
  let fixture: ComponentFixture<CommunicationComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({


      declarations: [ExampleComponent, KeepHtmlPipe, TitleComponent, CommunicationComponent, CounterComponent, Counter2Component],
      providers: [
        CounterService
      ]
    })
      .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunicationComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
