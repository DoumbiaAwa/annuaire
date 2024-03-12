import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse,HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Conseil } from 'src/app/model/conseil';
import { type } from 'os';
@Injectable({
  providedIn: 'root'
})
export class ConseilService {

  private apiurl = 'http://localhost:9000/api-koumi/conseil';

  constructor(private http: HttpClient) { }
  
  addConseil(){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      // You can add other headers if needed
    });

    return this.http.post(`${this.apiurl}/create`, type, { headers, responseType: 'text' });
  }

  getConseil(){
    console.log ('conseilservice')
    return this.http.get<any[]>(`${this.apiurl}$/read`)
    .pipe(
      catchError((error) => {
        console.error('Error in getType method', error);
        return throwError(error);
      }),
      map(data => data)
    );
  }

  // deleteType(idTypeActeur: number): Observable<any> {
  //   const headers = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //   });

  //   return this.http.delete(`${this.apiurl}/delete/${idTypeActeur}`, { headers, responseType: 'text' }).pipe(
  //     catchError(error => {
  //       console.error("Erreur sur la suppression du type", error);
  //       return throwError(error);
  //     })
  //   );
  // }
}

