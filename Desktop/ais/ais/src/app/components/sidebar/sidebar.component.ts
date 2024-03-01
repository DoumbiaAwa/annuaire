import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';
import { Router } from '@angular/router';


declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'fas fa-home', class: '' },
    { path: '/compte', title: 'Comptes', icon: 'fas fa-user-friends', class: '' },
    { path: '/acteur', title: 'Acteurs', icon: 'fas fa-users ', class: '' },
    { path: '/conseils', title: 'Conseils', icon: 'fas fa-lightbulb ', class: '' },
    // { path: '/enquete', title: 'Enquêtes', icon: 'fas fa-list-alt text-#FFAA00', class: '' },
    { path: '/message', title: 'Messages', icon: 'fas fa-envelope ', class: '' },
    { path: '/produit', title: 'Filière', icon: 'fas fa-industry ', class: '' },
    { path: '/categori', title: 'Categories', icon: 'fas fa-list ', class: '' },
    { path: '/speculation', title: 'Speculations', icon: 'fas fa-chart-pie ', class: '' },
    { path: '/zone', title: 'Zone de production', icon: 'fas fa-globe ', class: '' },
    { path: '/parametre', title: 'Paramètres généraux', icon: 'fas fa-cog', class: '' },
    { path: '/pays', title: 'Pays', icon: 'fas fa-flag text-flag-color ', class: '' },
    { path: '/unite', title: 'Unité', icon: 'fas fa-ruler ', class: '' },



]

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;

  constructor(private router: Router) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });
  }

  

 
  }

