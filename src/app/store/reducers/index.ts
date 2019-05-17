import { Action, ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

export enum ActionTypes {
    SetSearchState = '@jobjob [Search Component] SetSearchState',
    JobsLoadedSuccess = '@jobjob [Jobs API] Jobs Loaded Success',
    JobsLoading = '@jobjob [Jobs API] Load Jobs'
}

export class SetSearchState implements Action {
    readonly type = ActionTypes.SetSearchState;
    constructor(public payload: SearchState) {}
}

export class JobsLoadedSuccess implements Action {
    readonly type = ActionTypes.JobsLoadedSuccess;
    constructor(public payload) {}
}

export class JobsLoading implements Action {
    readonly type = ActionTypes.JobsLoading;
}

enum WorkLoad {
    Any = 'any',
    FullTime = 'Full Time',
    NotFullTime = 'Not full time'
}

class SearchState {
    constructor(
        public search: string,
        public location: string,
        public workLoad: WorkLoad
    ) {  }
}

const initialState = new SearchState('', '', WorkLoad.Any);
export function searchReducer(state: SearchState = initialState, action: SetSearchState) {
    switch (action.type) {
        case ActionTypes.SetSearchState:
            return {...action.payload};
        default:
            return {...state};
    }
}

export function jobsReducer(state: [] = [], action: JobsLoadedSuccess | JobsLoading) {
    switch (action.type) {
        case ActionTypes.JobsLoadedSuccess:
            return [...action.payload];
        default:
            return [...state];
    }
}

export function jobsLoadingReducer(state: boolean = false, action: JobsLoadedSuccess | JobsLoading) {
    switch (action.type) {
        case ActionTypes.JobsLoadedSuccess:
            return false;
        case ActionTypes.JobsLoading:
            return true;
        default:
            return state;
    }
}

export interface JobjobState {
    searchState: SearchState;
    jobs: Array<any>;
    jobsLoading: boolean;
}

export interface State {
    jobjob: JobjobState;
}

export const reducers: ActionReducerMap<JobjobState> = {
    searchState: searchReducer,
    jobs: jobsReducer,
    jobsLoading: jobsLoadingReducer,
};

export const selectJobjobState = createFeatureSelector<JobjobState>('jobjob');

export const selectSearchState = createSelector(selectJobjobState, (state) => state.searchState);
export const selectJobs = createSelector(selectJobjobState, (state) => state.jobs);
export const selectJobsLoading = createSelector(selectJobjobState, (state) => state.jobsLoading);
// export const getAllShips = createSelector(selectShips, fromShips.getAllShips);
