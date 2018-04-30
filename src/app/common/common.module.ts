import { NgModule } from '@angular/core'
import { MessageService } from './message.service'
import { CommonModule as AngularCommon } from '@angular/common'
import { HttpModule } from '@angular/http'
import { TitleComponent } from './title/title.component'
import { RandomMessageService } from './services/random-message.service'
import { ExampleComponent } from './example/example.component'
import { KeepHtmlPipe } from './pipes/keep-html.pipe'
import { FormsModule } from '@angular/forms'
import { InputTextModule } from 'primeng/primeng'

@NgModule({
  imports: [
    AngularCommon,
    FormsModule,
    InputTextModule,
    HttpModule
  ],
  providers: [
    MessageService,
    RandomMessageService
  ],
  declarations: [TitleComponent, ExampleComponent, KeepHtmlPipe],
  exports: [
    AngularCommon,
    HttpModule,
    TitleComponent,
    ExampleComponent,
    KeepHtmlPipe,
    FormsModule,
    InputTextModule
  ]
})
export class CommonModule {
}
