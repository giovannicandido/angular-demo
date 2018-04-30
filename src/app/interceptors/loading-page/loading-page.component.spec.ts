import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { LoadingPageComponent } from './loading-page.component'
import { TitleComponent } from '../../common/title/title.component'
import { LoadingComponent } from '../loading/loading.component'
import { FormsModule } from '@angular/forms'
import { HttpModule, XHRBackend } from '@angular/http'
import { MockBackend } from '@angular/http/testing'
import { LoadingInterceptor } from '../loading/loading-interceptor'
import { LoadingInterceptorService } from '../loading/loading-interceptor.service'

describe('LoadingPageComponent', () => {
  let component: LoadingPageComponent
  let fixture: ComponentFixture<LoadingPageComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        HttpModule
      ],
      declarations: [LoadingPageComponent, LoadingComponent, TitleComponent],
      providers: [
        LoadingInterceptor,
        LoadingInterceptorService,
        {
          provide: XHRBackend,
          useClass: MockBackend
        }
      ]
    })
      .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingPageComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
