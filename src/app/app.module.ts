import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PayloadConverterComponent } from './payload-converter/payload-converter.component';

@NgModule({
  declarations: [
    AppComponent,
    PayloadConverterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
