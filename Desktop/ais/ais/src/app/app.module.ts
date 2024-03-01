import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import {MatDialogModule} from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AddActeurComponent } from './pages/add-acteur/add-acteur.component';
import { LoginComponent } from './login/login.component';
import { Routes } from '@angular/router';
import { ViewConseilsComponent } from './pages/view-conseils/view-conseils.component';

const routes: Routes = [
  { path: 'vue', component:  ViewConseilsComponent },
  
];
@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule.forRoot(routes),
    AppRoutingModule,
    MatDialogModule,
    CommonModule,
    ReactiveFormsModule

  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    AddActeurComponent,
    LoginComponent,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }