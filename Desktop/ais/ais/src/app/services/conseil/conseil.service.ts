import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse,HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Conseil } from 'src/app/model/conseil';
@Injectable({
  providedIn: 'root'
})
export class ConseilService {

  private apiurl = 'http://localhost:9000/api-koumi/conseil';

  constructor(private http: HttpClient) { }


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
}

