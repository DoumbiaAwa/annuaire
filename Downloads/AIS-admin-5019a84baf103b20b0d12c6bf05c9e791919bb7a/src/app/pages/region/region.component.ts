import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddRegionComponent } from '../add-region/add-region.component';
@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.scss']
})
export class RegionComponent implements OnInit {

  constructor(private dialog: MatDialog) {}
  
  openDialog() {
    const dialogRef = this.dialog.open(AddRegionComponent , {
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
