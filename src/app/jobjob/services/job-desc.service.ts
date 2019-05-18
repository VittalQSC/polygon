import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JobDescService {
  url = '/positions'
  constructor(private http: HttpClient) { }

  getJobDesc(id: string) {
    return this.http.get<any>(`${this.url}/${id}`);
  }
}
