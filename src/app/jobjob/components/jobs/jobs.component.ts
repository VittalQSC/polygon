import { Component, OnInit } from '@angular/core';
import { JobsService } from '../../services/job.service';

@Component({
  selector: 'jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {
  jobList

  constructor(private jobsService: JobsService) { }

  ngOnInit() {
    this.jobsService.getJobs().subscribe(jobs => this.jobList = jobs);
  }

}
