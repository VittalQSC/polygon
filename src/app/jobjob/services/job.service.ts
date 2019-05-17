import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JobsService {
    url = '/positions'

    constructor(private http: HttpClient) { }
    
    getJobs(searchState):Observable<any[]> {
        const params = Object.keys(searchState).reduce((paramsObj, key) => {
            if(key && key !== '') {
                paramsObj[key] = searchState[key];
            }
            return paramsObj;
        }, {});
        return this.http.get<any[]>(this.url, { params });
    }
}