import { NgModule } from '@angular/core'
import { MessageService } from './message.service'
import { CommonModule as AngularCommon } from '@angular/common'
import { HttpModule } from '@angular/http'
import { TitleComponent } from './title/title.component'
import { RandomMessageService } from './services/random-message.service'

@NgModule({
  imports: [
    AngularCommon,
    HttpModule
  ],
  providers: [
    MessageService,
    RandomMessageService
  ],
  declarations: [TitleComponent],
  exports: [
    AngularCommon,
    HttpModule,
    TitleComponent
  ]
})
export class CommonModule {
}
