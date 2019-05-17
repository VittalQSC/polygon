import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, mergeMap, concatMapTo, switchMap, tap } from 'rxjs/operators';
import { JobsService } from '../../services/job.service';
import { ActionTypes, JobsLoadedSuccess, JobsLoading, SetSearchState } from '../../../store/reducers';

@Injectable()
export class JobsEffects {

  @Effect()
  showLoading$ = this.actions$
  .pipe(
    ofType(ActionTypes.SetSearchState),
    map(() => new JobsLoading())
  );

  @Effect()
  loadJobs$ = this.actions$
  .pipe(
    ofType(ActionTypes.SetSearchState),
    map((action: SetSearchState) => action.payload),
    mergeMap(searchState =>
      this.jobsService.getJobs(searchState)
          .pipe(
            map(jobs => (new JobsLoadedSuccess(jobs)))
          )
    ));

  constructor(
    private actions$: Actions,
    private jobsService: JobsService
  ) {}
}
