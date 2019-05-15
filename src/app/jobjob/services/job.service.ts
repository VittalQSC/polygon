import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JobsService {
    url = '/positions'

    constructor(private http: HttpClient) { }
    
    getJobs():Observable<any[]> {
        return this.http.get<any[]>(this.url);
    }
}