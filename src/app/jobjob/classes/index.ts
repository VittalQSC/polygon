export enum WorkLoad {
    Any = 'any',
    FullTime = 'Full Time',
    NotFullTime = 'Not full time'
}

export class SearchState {
    constructor(
        public search: string,
        public location: string,
        public workLoad: WorkLoad
    ) {  }
}
