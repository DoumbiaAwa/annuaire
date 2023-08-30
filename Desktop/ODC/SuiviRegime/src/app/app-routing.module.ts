import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JournallComponent } from './journall/journall.component';
import { AccueilComponent } from './accueil/accueil.component';
import { PagePlatComponent } from './pageplat/pageplat.component'; 
import { PlanificationComponent } from './planification/planification.component';
import { TodolistComponent } from './todolist/todolist.component';
import { CalorieComponent } from './calorie/calorie.component';
import { ObjectifComponent } from './objectif/objectif.component';
const routes: Routes = [
  { path: '', component: AccueilComponent, },
  { path: 'accueil', component: AccueilComponent, },
  { path: 'journall', component: JournallComponent, },
  { path: 'pageplat', component: PagePlatComponent, },
  { path: 'planification', component: PlanificationComponent, },
  { path: 'todolist/:planification', component: TodolistComponent, },
  { path: 'calorie', component: CalorieComponent, },
  { path: 'objectif', component: ObjectifComponent, },
  
  // ... ajoutez d'autres routes ici si nécessaire
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  // declarations: [PageplatComponent],
  
})
export class AppRoutingModule { }
