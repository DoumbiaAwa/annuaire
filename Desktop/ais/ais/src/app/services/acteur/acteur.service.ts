import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse,HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

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


  // getType(): Observable<any[]> {
  //   console.log('Calling getType method');
  //   return this.http.get<any[]>(`${this.apiurl}/read`)
  //     .pipe(
  //       catchError((error) => {
  //         console.error('Error in getType method', error);
  //         return throwError(error);
  //       })
  //     );
  // }
  

  
}
