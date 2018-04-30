import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { SidemenuComponent } from './sidemenu.component'
import { NoopAnimationsModule } from '@angular/platform-browser/animations'

describe('SidemenuComponent', () => {
  let component: SidemenuComponent
  let fixture: ComponentFixture<SidemenuComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule
      ],
      declarations: [SidemenuComponent]
    })
      .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(SidemenuComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
