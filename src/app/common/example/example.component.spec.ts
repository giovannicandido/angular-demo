import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { ExampleComponent } from './example.component'
import { KeepHtmlPipe } from '../pipes/keep-html.pipe'
import { CommonModule } from '@angular/common'

describe('ExampleComponent', () => {
  let component: ExampleComponent
  let fixture: ComponentFixture<ExampleComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule
      ],
      declarations: [ExampleComponent, KeepHtmlPipe]
    })
      .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
