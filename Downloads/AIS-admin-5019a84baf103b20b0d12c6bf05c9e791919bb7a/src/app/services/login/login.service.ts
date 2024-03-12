import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Login } from 'src/app/model/login';
import { Acteur } from 'src/app/model/acteur';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  // private baseUrl = "http://localhost:9000/api-koumi/acteur/login?";
  private currentUserKey = 'current_user';
  private currentUser: Acteur; // Declare currentUser property
  // http://localhost:9000/api-koumi/acteur/login?emailActeur=awa80598@gmail.com&password=admin
  constructor(private http: HttpClient) {}

  postConnexion(emailActeur,password): Observable<any> {
    return this.http.get('https://koumi.ml/api-koumi/acteur/login?emailActeur='+emailActeur+'&password='+password,{ headers: { 'Content-Type': 'application/json' } })
  }
  // postConnexion(login): Observable<Login> {
  //   return this.http.post<Login>(this.baseUrl, login, { headers: { 'Content-Type': 'application/json' } })
  //     .pipe(
  //       tap(user => this.setCurrentUser(user))
  //     );
  // }

  setCurrentUser(acteur: Acteur): void {
    this.currentUser = acteur;
    // Save the current user in localStorage
    localStorage.setItem(this.currentUserKey, JSON.stringify(acteur));
  }

  getCurrentUser(): Acteur {
    // Retrieve the current user from localStorage
    const storedUser = localStorage.getItem(this.currentUserKey);
    if (storedUser) {
      this.currentUser = JSON.parse(storedUser);
      return this.currentUser;
    } else {
      return null; // or a default value according to your needs
    }
  }

}
