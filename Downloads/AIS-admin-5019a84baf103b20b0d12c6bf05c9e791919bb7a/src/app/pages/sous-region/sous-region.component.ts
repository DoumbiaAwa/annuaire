import { Component, OnInit } from '@angular/core';
import { AddSousregionComponent } from '../add-sousregion/add-sousregion.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-sous-region',
  templateUrl: './sous-region.component.html',
  styleUrls: ['./sous-region.component.scss']
})
export class SousRegionComponent implements OnInit {

  constructor(private dialog: MatDialog) {}
  
  openDialog() {
    const dialogRef = this.dialog.open(AddSousregionComponent , {
      width: '700px',
      height: '600px',
      panelClass: 'warning-dialog',
      position: { 
      top: '-20%',
      left: '35%'
     },
    });
  }

  ngOnInit(): void {
  }

}
