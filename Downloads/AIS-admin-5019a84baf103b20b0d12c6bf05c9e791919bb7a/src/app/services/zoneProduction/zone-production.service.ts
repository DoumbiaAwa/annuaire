import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse,HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { ZoneProduction } from 'src/app/model/zoneProduction';
@Injectable({
  providedIn: 'root'
})
export class ZoneProductionService {

  private apiurl = 'http://localhost:9000/api-koumi/ZoneProduction';
  
  constructor(private http: HttpClient) { }

  addzone(zone: ZoneProduction): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post('http://localhost:9000/api-koumi/ZoneProduction/addZoneProduction', zone, { headers });
  }

  // addzone(type: any): Observable<any> {
  //   const headers = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //   });  
  //   return this.http.post(`${this.apiurl}/addZoneProduction`, type, { headers, responseType: 'text' })
  //     .pipe(
  //       tap(data => console.log('Success:', data)),
  //       catchError(error => {
  //         console.error('Error:', error);
  //         return throwError(error);
  //       })
  //     );
  // }

// getZone(): Observable<ZoneProduction[]>{
//   return this.http.get<ZoneProduction[]>( `${this.apiurl}/getAllZone/`).pipe(
//     tap(_ => console.info()),
//     catchError(error => {
//       console.error("error", error);
//       return[]
//     })
//   )

// }

deleteZone(idZoneProduction: number): Observable<any>{
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    // You can add other headers if needed
  });
  return this.http.delete(`${this.apiurl}/deleteZones/${idZoneProduction}`, { headers, responseType: 'text' }).pipe(

    catchError(error => {
      console.error("Erreur sur la suppression du filiere", error);
      return throwError(error);
    })
  );
  
}
}
