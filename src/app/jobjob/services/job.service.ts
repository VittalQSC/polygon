import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class JobsService {
    url = '/positions'

    constructor(private http: HttpClient) { }
    
    getJobs() {
        return this.http.get(this.url);
    }
}