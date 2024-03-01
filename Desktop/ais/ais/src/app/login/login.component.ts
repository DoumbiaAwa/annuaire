import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      mail: [''],
      password: ['']
    });
  }

  ngOnInit() {}

  ngOnDestroy() {}

  onLogin() {
    const email = this.loginForm.get('mail').value;
    const password = this.loginForm.get('password').value;

    // Vérifier si l'email et le mot de passe sont égaux à "admin"
    if (email === 'admin' && password === 'admin') {
      // Rediriger vers le tableau de bord
      this.router.navigate(['/dashboard']);
    } else {
      // Autre logique de connexion ou affichage d'un message d'erreur
    }
  }
}
