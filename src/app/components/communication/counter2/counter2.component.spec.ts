import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { Counter2Component } from './counter2.component'
import { CounterService } from '../counter.service'

describe('Counter2Component', () => {
  let component: Counter2Component
  let fixture: ComponentFixture<Counter2Component>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Counter2Component],
      providers: [
        CounterService
      ]
    })
      .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(Counter2Component)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
