import { Routes } from '@angular/router';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { ActeursComponent } from 'src/app/pages/acteurs/acteurs.component';
import { CompteComponent } from 'src/app/pages/compte/compte.component';
import { ConseilsComponent } from 'src/app/pages/conseils/conseils.component';
import { EnqueteComponent } from 'src/app/pages/enquete/enquete.component';
import { MessageComponent } from 'src/app/pages/message/message.component';
import { ProduitComponent } from 'src/app/pages/produit/produit.component';
import { CategorieComponent } from 'src/app/pages/categorie/categorie.component';
import { SpeculationComponent } from 'src/app/pages/speculation/speculation.component';
import { ZoneProductionComponent } from 'src/app/pages/zone-production/zone-production.component';
// import { AddMessageComponent } from 'src/app/pages/add-message/add-message.component';
import { ParametreComponent } from 'src/app/pages/parametre/parametre.component';
import { CorbeilleComponent } from 'src/app/pages/corbeille/corbeille.component';
import { PaysComponent } from 'src/app/pages/pays/pays.component';
import { UniteComponent } from 'src/app/pages/unite/unite.component';
import { ViewConseilsComponent } from 'src/app/pages/view-conseils/view-conseils.component';
import { AddActeurComponent } from 'src/app/pages/add-acteur/add-acteur.component';
import { CompteDetailComponent } from 'src/app/pages/compte-detail/compte-detail.component';
import { ContinentComponent } from 'src/app/pages/continent/continent.component';
import { SousRegionComponent } from 'src/app/pages/sous-region/sous-region.component';
import { RegionComponent } from 'src/app/pages/region/region.component';
import { CercleComponent } from 'src/app/pages/cercle/cercle.component';
import { CommuneComponent } from 'src/app/pages/commune/commune.component';

export const AdminLayoutRoutes: Routes = [
    // { path: 'login',      component: LoginComponent },
    { path: 'dashboard',      component: DashboardComponent },
    {path:'acteur',           component: ActeursComponent},
    {path:'compte',           component: CompteComponent},
    {path:'conseils',         component: ConseilsComponent},
    {path:'enquete',          component:  EnqueteComponent },
    {path:'message',          component:  MessageComponent },
    {path:'produit',          component:  ProduitComponent },
    {path:'categori',         component: CategorieComponent },
    {path:'speculation',      component: SpeculationComponent },
    {path:'zone',             component: ZoneProductionComponent },
    {path:'parametre',        component:  ParametreComponent },
    {path:'corbeille',        component:  CorbeilleComponent },
    {path:'pays',              component:  PaysComponent  },
    {path:'unite',            component: UniteComponent  },
    {path:'vue',              component: ViewConseilsComponent  },
    {path:'type-acteur',       component:   AddActeurComponent },
    {path:'detail',       component:   CompteDetailComponent },
    {path:'continent',       component:   ContinentComponent},
    {path:'sousregion',       component:  SousRegionComponent},
    {path:'region',       component: RegionComponent},
    {path:'cercle',       component:  CercleComponent},
    {path:'commune',       component: CommuneComponent},
     
    

    // {path:'add-message',      component: AddMessageComponent},


    


    

];
