import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageFilterActionsComponent } from './page-filter-actions.component';

describe('PageFilterActionsComponent', () => {
  let component: PageFilterActionsComponent;
  let fixture: ComponentFixture<PageFilterActionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PageFilterActionsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageFilterActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
