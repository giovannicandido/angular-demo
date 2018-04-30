import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing'

import {CounterComponent} from './counter.component'

describe('CounterComponent', () => {
  let component: CounterComponent
  let fixture: ComponentFixture<CounterComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CounterComponent]
    })
      .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should counter on click', fakeAsync(() => {
    const button = fixture.debugElement.nativeElement.querySelector('button')
    expect(component.counter).toEqual(0)
    button.click()
    tick()
    expect(component.counter).toEqual(1)

  }))

  it('should emit counter event on click', fakeAsync(() => {
    const button = fixture.debugElement.nativeElement.querySelector('button')
    let result
    component.onNewNumber.subscribe((number) => result = number)

    button.click()
    tick()
    expect(result).toEqual(1)

  }))
})

