import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LigneService {
  
  private baseUrl = 'http://52.47.36.15:8083/lignes';
  /*private baseUrl = 'http://localhost:8083/lignes';*/

  constructor(private http: HttpClient) { }

  getLignes(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getLigne(nomLigne: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${nomLigne}`);
  }

}
