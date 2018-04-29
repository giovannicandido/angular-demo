import { NgModule } from '@angular/core'
import { MessageService } from './message.service'
import { CommonModule as AngularCommon } from '@angular/common'
import { HttpModule } from '@angular/http'

@NgModule({
  imports: [
    AngularCommon,
    HttpModule
  ],
  providers: [
    MessageService
  ],
  declarations: [],
  exports: [
    AngularCommon,
    HttpModule
  ]
})
export class CommonModule { }
