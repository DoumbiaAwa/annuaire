import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { JournallComponent } from './journall/journall.component';
import { PlanificationComponent } from './planification/planification.component';
import { TodolistComponent } from './todolist/todolist.component';
import { CalorieComponent } from './calorie/calorie.component';
import { PagePlatComponent } from './pageplat/pageplat.component';
import { ObjectifComponent } from './objectif/objectif.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    JournallComponent,
    PlanificationComponent,
    TodolistComponent,
    CalorieComponent,
    PagePlatComponent,
    ObjectifComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
