import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobComponent } from './components/job/job.component';
import { JobsService } from './services/job.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [JobComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    JobComponent
  ],
  providers: [ JobsService ]
})
export class JobjobModule { }
