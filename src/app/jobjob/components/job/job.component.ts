import { Component, OnInit } from '@angular/core';
import { JobsService } from '../../services/job.service';

@Component({
  selector: 'job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {

  constructor(private jobsService: JobsService) { }

  ngOnInit() {
    this.jobsService.getJobs().subscribe(jobs => console.log(jobs));
  }

}
