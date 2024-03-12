import { Component, OnInit, Renderer2, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  @ViewChild('sidebarCollapse') sidebarCollapse: ElementRef;

  constructor(private renderer: Renderer2, private el: ElementRef) { }

  ngOnInit() {
  }


}
