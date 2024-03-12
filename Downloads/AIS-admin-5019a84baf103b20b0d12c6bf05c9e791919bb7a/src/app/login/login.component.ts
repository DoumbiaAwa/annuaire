import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private loginService: LoginService) {
    this.loginForm = this.fb.group({
      emailActeur: [''],
      password: ['']
    });
  }

  ngOnInit() {}

  ngOnDestroy() {}

  onLogin() {
    const emailActeur = this.loginForm.get('emailActeur').value;
    const password = this.loginForm.get('password').value;
  
    this.loginService.postConnexion(emailActeur,password).subscribe((response) => {
      console.log('login component',response);
      this.loginService.setCurrentUser(response)
    
      this.router.navigate(['pages/dashboard'])
    })
    // this.loginService.postConnexion({ emailActeur, password }).subscribe(
    //   (user) => {
    //     // Stocker les informations de l'utilisateur dans le service LoginService
    //     this.loginService.setCurrentUser(user);
  
    //     // Rediriger vers la page de tableau de bord
    //     this.router.navigate(['pages/dashboard']);
    //   },
    //   (error) => {
    //     // Gérer l'erreur de connexion ici
    //     console.error('Login error:', error);
    //     // Afficher éventuellement un message d'erreur à l'utilisateur
    //   }
    // );
  }
  
}
