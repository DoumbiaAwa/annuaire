import { Injectable } from '@angular/core';
import { Filiere } from 'src/app/model/filiere';
import { HttpClient, HttpResponse,HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class FiliereService {
  private apiurl = 'http://localhost:9000/api-koumi/Filiere';
  
  constructor(private http: HttpClient) { }

  addfiliere(type: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
  
    return this.http.post(`${this.apiurl}/AddFiliere`, type, { headers, responseType: 'text' })
      .pipe(
        tap(data => console.log('Success:', data)),
        catchError(error => {
          console.error('Error:', error);
          return throwError(error);
        })
      );
  }

getFiliere(): Observable<Filiere[]>{
  return this.http.get<Filiere[]>( `${this.apiurl}/getAllFiliere/`).pipe(
    tap(_ => console.info()),
    catchError(error => {
      console.error("error", error);
      return[]
    })
  )

}

deleteFiliere(idFiliere: number): Observable<any>{
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    // You can add other headers if needed
  });
  return this.http.delete(`${this.apiurl}/delete/${idFiliere}`, { headers, responseType: 'text' }).pipe(

    catchError(error => {
      console.error("Erreur sur la suppression du filiere", error);
      return throwError(error);
    })
  );
  
}


  
}
