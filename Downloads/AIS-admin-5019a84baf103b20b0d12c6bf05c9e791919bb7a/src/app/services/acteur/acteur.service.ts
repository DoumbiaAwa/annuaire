import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { read } from 'fs';
import { TypeActeur } from 'src/app/model/typeActeur';
import { shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ActeurService {
  private apiurl = 'http://localhost:9000/api-koumi/typeActeur';

  constructor(private http: HttpClient) { }



  addType(type: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      // You can add other headers if needed
    });

    return this.http.post(`${this.apiurl}/create`, type, { headers, responseType: 'text' });
  }

  getActeur(): Observable<TypeActeur[]> {
    return this.http.get<TypeActeur[]>(`${this.apiurl}/read`).pipe(
      tap(_ => console.info()),
      catchError(error => {
        console.error("Erreur sur l’appel getUsers", error);
        // You might want to handle the error or throw it again based on your requirements.
        return [];
      })
    );
  }

  deleteType(idTypeActeur: number): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      // You can add other headers if needed
    });

    return this.http.delete(`${this.apiurl}/delete/${idTypeActeur}`, { headers, responseType: 'text' }).pipe(
      catchError(error => {
        console.error("Erreur sur la suppression du type", error);
        return throwError(error);
      })
    );
  }





}
