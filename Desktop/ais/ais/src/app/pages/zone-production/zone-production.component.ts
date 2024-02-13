import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddZoneComponent } from '../add-zone/add-zone.component';
@Component({
  selector: 'app-zone-production',
  templateUrl: './zone-production.component.html',
  styleUrls: ['./zone-production.component.scss']
})
export class ZoneProductionComponent implements OnInit {
  constructor(private dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(AddZoneComponent, {
      width: '528px',
      height: '500px',
      panelClass: 'warning-dialog',
      position: { 
      top: '-10%',
      left: '35%'
     },
    });
  }

  ngOnInit(): void {
  }

}
