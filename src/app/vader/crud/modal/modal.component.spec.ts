import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { ModalComponent } from './modal.component'
import { ModalModule } from './modal.module'
import { NoopAnimationsModule } from '@angular/platform-browser/animations'

describe('ModalComponent', () => {
  let component: ModalComponent;
  let fixture: ComponentFixture<ModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NoopAnimationsModule, ModalModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
