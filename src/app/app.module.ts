import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { JobjobModule } from './jobjob/jobjob.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    JobjobModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
