import { SearchState } from '../../classes';
import { ActionReducerMap } from '@ngrx/store';

import * as fromJobjob from './jobjob.reducer';

export interface JobjobState {
    searchState: SearchState;
    jobs: Array<any>;
    jobsLoading: boolean;
}

// TODO extends root State
export interface State {
    jobjob: JobjobState;
}

export const reducers: ActionReducerMap<JobjobState> = {
    searchState: fromJobjob.searchReducer,
    jobs: fromJobjob.jobsReducer,
    jobsLoading: fromJobjob.jobsLoadingReducer,
};
