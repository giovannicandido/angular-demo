import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { CrudComponent } from './crud.component'
import { TitleComponent } from '../../common/title/title.component'

describe('CrudComponent', () => {
  let component: CrudComponent
  let fixture: ComponentFixture<CrudComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TitleComponent, CrudComponent]
    })
      .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
