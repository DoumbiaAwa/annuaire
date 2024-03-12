import { Injectable } from '@angular/core';
import { Acteur } from 'src/app/model/acteur';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private asteur1: Acteur | undefined;
  private currentUserKey = 'current_user';

  saveAdmin() {
    localStorage.setItem(this.currentUserKey, JSON.stringify(this.asteur1));
  }

  constructor(private router: Router) {}

  logout() {
    this.router.navigate(['pages/login']);
  }

  setAdminConnecte(acteur: Acteur) {
    this.asteur1 = acteur;
    this.saveAdmin();
  }

  getAdminConnecte() {
    let data: any = localStorage.getItem(this.currentUserKey);
    this.asteur1 = JSON.parse(data);
    console.log(this.asteur1);
    return this.asteur1;
  }
}
