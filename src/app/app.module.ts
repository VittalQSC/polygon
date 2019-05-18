import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { JobjobModule } from './jobjob/jobjob.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { RouterModule, Routes } from '@angular/router';
import { JobDescComponent } from './jobjob/components/job-desc/job-desc.component';

const appRoutes: Routes = [
  { path: '',   redirectTo: '/jobjob', pathMatch: 'full' },
  // { path: 'a', component: JobDescComponent }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    JobjobModule,
    EffectsModule.forRoot([]),
    StoreModule.forRoot({}),
    RouterModule.forRoot(appRoutes),
    StoreDevtoolsModule.instrument({
      maxAge: 25
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
