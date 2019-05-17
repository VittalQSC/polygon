import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { JobComponent } from './components/job/job.component';
import { JobsService } from './services/job.service';
import { HttpClientModule } from '@angular/common/http';
import { JobsComponent } from './components/jobs/jobs.component';
import { SharedModule } from '../shared/shared.module';
import { SearchComponent } from './components/search/search.component';
import { StoreModule } from '@ngrx/store';
import { searchReducer, jobsReducer, jobsLoadingReducer } from '../store/reducers';
import { EffectsModule } from '@ngrx/effects';
import { JobsEffects } from './store/effects/jobs.effects';

import * as fromJobjob from './store/reducers';

@NgModule({
  declarations: [JobComponent, JobsComponent, SearchComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
    StoreModule.forFeature('jobjob', fromJobjob.reducers),
    EffectsModule.forFeature([JobsEffects]),
  ],
  exports: [
    JobsComponent,
    SearchComponent
  ],
  providers: [ JobsService ]
})
export class JobjobModule { }
