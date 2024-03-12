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
import { MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AddActeurComponent } from './pages/add-acteur/add-acteur.component';
import { LoginComponent } from './login/login.component';
import { Routes } from '@angular/router';
import { ActeursComponent } from './pages/acteurs/acteurs.component';
import { ViewConseilsComponent } from './pages/view-conseils/view-conseils.component';
import { FiliereAddComponent } from './pages/filiere-add/filiere-add.component';
import { ProduitComponent } from './pages/produit/produit.component';
import { CompteDetailComponent } from './pages/compte-detail/compte-detail.component';
import { CompteComponent } from './pages/compte/compte.component';
import { AddCategorieComponent } from './pages/add-categorie/add-categorie.component';
import { AddZoneComponent } from './pages/add-zone/add-zone.component';
import { ZoneProductionComponent } from './pages/zone-production/zone-production.component';
import { ContinentComponent } from './pages/continent/continent.component';
import { SousRegionComponent } from './pages/sous-region/sous-region.component';
import { RegionComponent } from './pages/region/region.component';
import { CercleComponent } from './pages/cercle/cercle.component';
import { CommuneComponent } from './pages/commune/commune.component';
import { AddContinentComponent } from './pages/add-continent/add-continent.component';
import { AddSousregionComponent } from './pages/add-sousregion/add-sousregion.component';
import { AddRegionComponent } from './pages/add-region/add-region.component';
import { AddCercleComponent } from './pages/add-cercle/add-cercle.component';
import { AddCommuneComponent } from './pages/add-commune/add-commune.component';
import { ParametreComponent } from './pages/parametre/parametre.component';
const routes: Routes = [
  { path: 'vue', component: ViewConseilsComponent },
  { path: 'detail', component: CompteDetailComponent },


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
    LoginComponent,
    AddActeurComponent,
    ActeursComponent,
    FiliereAddComponent,
    ProduitComponent,
    CompteComponent,
    AddCategorieComponent,
    AddZoneComponent,
    ZoneProductionComponent,
    ContinentComponent,
    SousRegionComponent,
    RegionComponent,
    CercleComponent,
    CommuneComponent,
    AddContinentComponent,
    AddSousregionComponent,
    AddRegionComponent,
    AddCercleComponent,
    AddCommuneComponent,
    ParametreComponent

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }