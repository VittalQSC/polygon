import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectJobs, selectJobsLoading } from '../../selectors';
import { JobjobState } from '../../store/reducers';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {
  jobList: Observable<any> = this.store.select(selectJobs);
  isLoading: Observable<boolean> = this.store.select(selectJobsLoading);

  constructor(private store: Store<JobjobState>) { }

  ngOnInit() {  }

}
