import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WINDOW_PROVIDERS } from "./services/window.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' })
  ],
  providers: [ WINDOW_PROVIDERS ],
    bootstrap: [AppComponent]
})
export class AppModule { }
