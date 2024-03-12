import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { ConseilsComponent } from './pages/conseils/conseils.component';
import { LoginComponent } from 'src/app/login/login.component';
import { ViewConseilsComponent } from './pages/view-conseils/view-conseils.component';
// import { AddMessageComponent } from './pages/add-message/add-message.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('src/app/login/login.module').then(m => m.LoginModule)
      },

    ]
  },
  {
    path: 'pages',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('src/app/layouts/admin-layout/admin-layout.module').then(m => m.AdminLayoutModule)
      },

    ]
  },


  {
    path: '',
    component: AuthLayoutComponent,

    children: [
      {
        path: 'layout',
        loadChildren: () => import('src/app/layouts/auth-layout/auth-layout.module').then(m => m.AuthLayoutModule)
      },
    ]
  },


  {
    path: '**',
    redirectTo: 'login'
  },



];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
