import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { read } from 'fs';
import { shareReplay } from 'rxjs/operators';
import { Acteur } from 'src/app/model/acteur';
@Injectable({
  providedIn: 'root'
})
export class CompteService {
  private apiurl =  'http://localhost:9000/api-koumi/acteur';
  constructor(private http: HttpClient) { }

  getCompte(): Observable<Acteur[]> {
    console.log ('compte service')
    return this.http.get<Acteur[]>(`${this.apiurl}/read`).pipe(
      tap(_ => console.info()),
      catchError(error => {
        console.error("Erreur sur l’appel getcompte", error);
        // You might want to handle the error or throw it again based on your requirements.
        return [];
      })
    );
  }
}
