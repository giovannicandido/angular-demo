import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { DataTableComponent } from './data-table.component'
import { NotificationService } from '../../common/notification.service'
import { CommonModule } from '@angular/common'
import { ConfirmationService, ContextMenuModule, DataTableModule, ToolbarModule } from 'primeng/primeng'
import { VaderCommonModule } from '../../common/common.module'

describe('DataTableComponent', () => {
  let component: DataTableComponent;
  let fixture: ComponentFixture<DataTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        ToolbarModule,
        DataTableModule,
        ContextMenuModule,
        VaderCommonModule
      ],
      declarations: [
        DataTableComponent
      ],
      providers: [
        NotificationService,
        ConfirmationService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should add data', () => {
    component.add("Bla");
    expect(component.data).toContain("Bla")
  })

  it('should remove a element', () => {
    component.initData(["Foo", "Bar"])
    expect(component.data).toContain("Foo")
    expect(component.data).toContain("Bar")

    component.remove("Foo")

    expect(component.data).not.toContain("Foo")
    expect(component.data).toContain("Bar")
  })

  it('should update a element', () => {

    let item1 = {
      name: 'Foo',
      _links: {
        self: {
          href: "1"
        }
      }
    }

    let item2 = {
      name: 'Bar',
      _links: {
        self: {
          href: "2"
        }
      }
    }

    component.initData([item1, item2])
    expect(component.data).toContain(item1)
    expect(component.data).toContain(item2)

    item1.name = 'Foo is new'
    component.update(item1)
    expect(component.data[0].name).toEqual('Foo is new')

    expect(component.data.length).toEqual(2)
    expect(component.data).toContain(item1)
    expect(component.data).toContain(item2)
    expect(component.data[0].name).toEqual('Foo is new')
  })


});
