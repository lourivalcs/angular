import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './views/'
import {
  ListComponent,
  ListDetailsComponent
} from './components'

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ListDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
