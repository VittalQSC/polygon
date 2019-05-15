import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobComponent } from './components/job/job.component';
import { JobsService } from './services/job.service';
import { HttpClientModule } from '@angular/common/http';
import { JobsComponent } from './components/jobs/jobs.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [JobComponent, JobsComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule
  ],
  exports: [
    JobsComponent
  ],
  providers: [ JobsService ]
})
export class JobjobModule { }
