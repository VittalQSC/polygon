import { SearchState, WorkLoad } from '../../classes';
import { SetSearchState, JobjobActionTypes, JobsLoadedSuccess, JobsLoading } from '../actions/jobs.actions';

const initialState = new SearchState('', '', WorkLoad.Any);
export function searchReducer(state: SearchState = initialState, action: SetSearchState) {
    switch (action.type) {
        case JobjobActionTypes.SetSearchState:
            return {...action.payload};    
        default:
            return {...state};
    }
}

export function jobsReducer(state:[] = [], action: JobsLoadedSuccess | JobsLoading) {
    switch (action.type) {
        case JobjobActionTypes.JobsLoadedSuccess:
            return [...action.payload];    
        default:
            return [...state];
    }
}

export function jobsLoadingReducer(state: boolean = false, action: JobsLoadedSuccess | JobsLoading) {
    switch (action.type) {
        case JobjobActionTypes.JobsLoadedSuccess:
            return false;    
        case JobjobActionTypes.JobsLoading:
            return true;    
        default:
            return state;
    }
}