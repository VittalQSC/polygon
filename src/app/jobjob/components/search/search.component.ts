import { Component, OnInit } from '@angular/core';

enum WorkLoad {
  Any = 'any',
  FullTime = 'Full Time',
  NotFullTime = 'Not full time'
};

class SearchState {
  constructor(
    public search: string,
    public location: string,
    public workLoad: WorkLoad
  ) {  }
}

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchState = new SearchState('', '', WorkLoad.Any);

  workLoadOptions = Object.keys(WorkLoad).map(wl => WorkLoad[wl]);

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log('submit ', this.searchState);
  }

}
