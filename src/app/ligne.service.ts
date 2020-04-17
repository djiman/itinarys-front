import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LigneService {

  private baseUrl = 'http://localhost:8080/lignes';

  constructor(private http: HttpClient) { }

  getLignes(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
