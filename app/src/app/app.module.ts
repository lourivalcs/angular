import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './views/'
import {
  ListComponent,
  ListDetailsComponent,
  TableComponent
} from './components'

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ListDetailsComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
