import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JobsService {
    url = '/positions'

    constructor(private http: HttpClient) { }
    
    getJobs(searchState):Observable<any[]> {
        console.log('searchState', searchState);
        return this.http.get<any[]>(this.url);
    }
}