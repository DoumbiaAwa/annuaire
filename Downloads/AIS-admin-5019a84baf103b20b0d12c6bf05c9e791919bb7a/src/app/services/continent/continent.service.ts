import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { read } from 'fs';
import { shareReplay } from 'rxjs/operators';
import { Continent } from 'src/app/model/continent';
@Injectable({
  providedIn: 'root'
})
export class ContinentService {
  private apiurl = 'http://localhost:9000/api-koumi/continent';

  constructor(private http: HttpClient) { }

  addContinent(type: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      // You can add other headers if needed
    });

    return this.http.post(`${this.apiurl}/create`, type, { headers, responseType: 'text' });
  }

  getContinent(): Observable<Continent[]> {
    return this.http.get<Continent[]>(`${this.apiurl}/read`).pipe(
      tap(_ => console.info()),
      catchError(error => {
        console.error("Erreur sur l’appel getUsers", error);
        // You might want to handle the error or throw it again based on your requirements.
        return [];
      })
    );
  }
  deleteContinent(idContinent: number): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.delete(`${this.apiurl}/delete/${idContinent}`, { headers, responseType: 'text' }).pipe(
      catchError(error => {
        console.error("Erreur sur la suppression du type", error);
        return throwError(error);
      })
    );
  }
}
