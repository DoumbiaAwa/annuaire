import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddCercleComponent } from '../add-cercle/add-cercle.component';
@Component({
  selector: 'app-cercle',
  templateUrl: './cercle.component.html',
  styleUrls: ['./cercle.component.scss']
})
export class CercleComponent implements OnInit {

  constructor(private dialog: MatDialog) {}
  
  openDialog() {
    const dialogRef = this.dialog.open( AddCercleComponent  , {
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
