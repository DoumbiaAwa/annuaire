import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'fas fa-tachometer-alt', class: '' },
    { path: '/compte', title: 'Comptes', icon: 'fas fa-user text-white', class: '' },
    { path: '/acteur', title: 'Acteurs', icon: 'fas fa-users text-white', class: '' },
    { path: '/conseils', title: 'Conseils', icon: 'fas fa-lightbulb text-white', class: '' },
    // { path: '/enquete', title: 'Enquêtes', icon: 'fas fa-list-alt text-white', class: '' },
    { path: '/message', title: 'Messages', icon: 'fas fa-envelope text-white', class: '' },
    { path: '/produit', title: 'Filière', icon: 'fas fa-industry text-white', class: '' },
    { path: '/categori', title: 'Categories', icon: 'fas fa-list text-white', class: '' },
    { path: '/speculation', title: 'Speculations', icon: 'fas fa-chart-pie text-white', class: '' },
    { path: '/zone', title: 'Zone de production', icon: 'fas fa-globe text-white', class: '' }
];

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
