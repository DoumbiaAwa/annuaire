import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { ParametreGeneraux } from 'src/app/model/parametreGeneraux';

@Injectable({
  
  providedIn: 'root'
})
export class ParametreGenerauxService {
  
  private baseUrl = 'https://koumi.ml/api-koumi/parametreGeneraux';

  constructor(private http: HttpClient) {}

  getParametre(): Observable<ParametreGeneraux[]> {
    console.log('param service');
    return this.http.get<ParametreGeneraux[]>(`${this.baseUrl}/read`).pipe(
      catchError(error => {
        console.error("Erreur sur l’appel parametre", error);
        // You might want to handle the error or throw it again based on your requirements.
        return [];
      })
    );
  }

  // updateParametreGeneral(id: string, parametreGeneral: string): Observable<any> {
  //   const url = `${this.baseUrl}/api-koumi/parametreGeneraux/update/${id}?parametreGeneral=${parametreGeneral}`;
  //   return this.http.put(url, {});
  // }
}
