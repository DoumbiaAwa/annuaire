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
export const AdminLayoutRoutes: Routes = [
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


    


    

];
