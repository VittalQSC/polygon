import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SetSearchState } from '../../../store/reducers';

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

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchState = new SearchState('', '', WorkLoad.Any);

  workLoadOptions = Object.keys(WorkLoad).map(wl => WorkLoad[wl]);

  searchState$: Observable<SearchState>;

  constructor(private store: Store<{ searchState: SearchState }>) { }

  ngOnInit() {
  }

  onSubmit() {
    this.store.dispatch(new SetSearchState(this.searchState));
  }

}
