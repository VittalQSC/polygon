import { Action } from '@ngrx/store';
import { SearchState } from '../../classes';

export enum JobjobActionTypes {
    SetSearchState = '@jobjob [Search Component] SetSearchState',
    JobsLoadedSuccess = '@jobjob [Jobs API] Jobs Loaded Success',
    JobsLoading = '@jobjob [Jobs API] Load Jobs'
}

export class SetSearchState implements Action {
    readonly type = JobjobActionTypes.SetSearchState;
    constructor(public payload: SearchState) {}
}

export class JobsLoadedSuccess implements Action {
    readonly type = JobjobActionTypes.JobsLoadedSuccess;
    constructor(public payload) {}
}

export class JobsLoading implements Action {
    readonly type = JobjobActionTypes.JobsLoading;
}