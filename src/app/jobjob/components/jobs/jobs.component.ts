import { Component, OnInit } from '@angular/core';
import { JobsService } from '../../services/job.service';

@Component({
  selector: 'jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {
  jobList:any[] = [];

  constructor(private jobsService: JobsService) { }

  ngOnInit() {
    this.jobsService.getJobs().subscribe(jobs => this.jobList = jobs);
  }

}
