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
import { JobsContainerComponent } from './components/jobs-container/jobs-container.component';
import { Routes, RouterModule } from '@angular/router';
import { JobDescComponent } from './components/job-desc/job-desc.component';

const jobjobRoutes: Routes = [
  { path: 'jobjob',  component: JobsContainerComponent, pathMatch: 'full' },
  { path: 'jobjob/:jobId',  component: JobDescComponent }
];

@NgModule({
  declarations: [
    JobComponent, JobsComponent, SearchComponent, JobsContainerComponent, JobDescComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
    StoreModule.forFeature('jobjob', fromJobjob.reducers),
    EffectsModule.forFeature([JobsEffects]),
    RouterModule.forChild(jobjobRoutes)
  ],
  exports: [
    JobsComponent,
    SearchComponent,
    JobsContainerComponent,
    JobDescComponent
  ],
  providers: [ JobsService ]
})
export class JobjobModule { }
