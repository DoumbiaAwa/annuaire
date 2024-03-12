import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { CategorieProduit } from 'src/app/model/categorieProduit';

@Injectable({
  providedIn: 'root'
})
export class CategoriService {
  private apiurl = 'http://localhost:9000/api-koumi/Categorie';

  constructor(private http: HttpClient) { }

  addCategorie(type: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
  
    return this.http.post(`${this.apiurl}/addCategorie`, type, { headers, responseType: 'text' })
      .pipe(
        tap(data => console.log('Success:', data)),
        catchError(error => {
          console.error('Error:', error);
          // log the error message to the console
          console.error('Error adding category:', error.message);
          return throwError(error);
        })
      );
  }

  // getCategorie(filiereId: number): Observable<CategorieProduit[]> {
  //   return this.http.get<CategorieProduit[]>(`${this.apiurl}/allCategorieByFiliere/${filiereId}`).pipe(
  //     tap(_ => console.info()),
  //     catchError(error => {
  //       console.error("error", error);
  //       return [];
  //     })
  //   );
  // }

  deleteCategorie(idCategorie: number): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.delete(`${this.apiurl}/delete/${idCategorie}`, { headers, responseType: 'text' }).pipe(
      tap(data => console.log('Success:', data)),
      catchError(error => {
        console.error('Error:', error);
        return throwError(error);
      })
    );
  }
}