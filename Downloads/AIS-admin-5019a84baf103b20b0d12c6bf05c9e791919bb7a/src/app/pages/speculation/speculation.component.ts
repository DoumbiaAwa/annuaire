import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddSpeculationComponent } from '../add-speculation/add-speculation.component';
@Component({
  selector: 'app-speculation',
  templateUrl: './speculation.component.html',
  styleUrls: ['./speculation.component.scss']
})
export class SpeculationComponent implements OnInit {

  constructor(private dialog: MatDialog) {}
  
  openDialog() {
    const dialogRef = this.dialog.open(AddSpeculationComponent, {
      width: '700px',
      height: '700px',
      panelClass: 'warnin-dialog',
      position: { 
      top: '-20%',
       left: '35%' },
    });
  }

  ngOnInit(): void {
  }

}
