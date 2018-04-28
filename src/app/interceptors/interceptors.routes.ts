/**
 *
 * @author Giovanni Silva
 */
import {NgModule} from '@angular/core';
import {Route, RouterModule, Routes} from '@angular/router';
import {LoadingComponent} from './loading/loading.component';
import {MessageComponent} from './message/message.component';
import { LoadingPageComponent } from './loading-page/loading-page.component'

export const interceptorsRoute: Routes = [
  {path: 'loading', component: LoadingPageComponent},
  {path: 'message', component: MessageComponent}
]

@NgModule({
  imports: [
    RouterModule.forChild(interceptorsRoute)
  ]
})
export class InterceptorsRouteModule {
}
