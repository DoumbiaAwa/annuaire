import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';
// import { ROUTES } from '../sidebar/sidebar.component';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  

  constructor(private renderer: Renderer2, private el: ElementRef) { }

  ngOnInit() {
    // this.initSidebarToggle();
  }

  // private initSidebarToggle() {
  //   const sidebarCollapse = this.el.nativeElement.querySelector('#sidebarCollapse');

  //   if (sidebarCollapse) {
  //     this.renderer.listen(sidebarCollapse, 'click', () => {
  //       // this.renderer.selectRootElement('#sidebar').classList.toggle('active');
  //       // this.renderer.selectRootElement('#body').classList.toggle('active');
  //     });
  //   }
  // }


   

}
