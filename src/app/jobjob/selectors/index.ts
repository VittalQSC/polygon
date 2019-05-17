import { createFeatureSelector, createSelector } from '@ngrx/store';
import { JobjobState } from '../store/reducers';

export const selectJobjobState = createFeatureSelector<JobjobState>('jobjob');

export const selectSearchState = createSelector(selectJobjobState, (state) => state.searchState);
export const selectJobs = createSelector(selectJobjobState, (state) => state.jobs);
export const selectJobsLoading = createSelector(selectJobjobState, (state) => state.jobsLoading);