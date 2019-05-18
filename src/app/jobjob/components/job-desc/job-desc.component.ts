import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { JobDescService } from '../../services/job-desc.service';

@Component({
  selector: 'app-job-desc',
  templateUrl: './job-desc.component.html',
  styleUrls: ['./job-desc.component.css']
})
export class JobDescComponent implements OnInit {
  id$: Observable<string> = this.activatedRoute.paramMap
    .pipe(map(() => window.history.state.id));
  
  description$: string;

  constructor(public activatedRoute: ActivatedRoute,
    public jobDescService: JobDescService) { }

  ngOnInit() { 
    this.id$.subscribe(
      id => 
        (
          this.jobDescService.getJobDesc(id).subscribe(jobDesc => {
            console.log('jobDesc', jobDesc);
            (this.description$ = jobDesc.description)
          })
        )
    );
    // this.jobDescService.getJobDesc()
  }

}
