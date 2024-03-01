import { Component, OnInit } from '@angular/core';
import { AddUniteComponent } from '../add-unite/add-unite.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-unite',
  templateUrl: './unite.component.html',
  styleUrls: ['./unite.component.scss']
})
export class UniteComponent implements OnInit {

  constructor(private dialog: MatDialog) {}
  
  openDialog() {
    const dialogRef = this.dialog.open(AddUniteComponent, {
      width: '528px', // or your desired width
      height: '400px', // or your desired height
      // disableClose: true,
      panelClass: 'warning-dialog',
      position: {
      top: '-20%',
      left: '40%',
      
      },
    });
  }
  

  ngOnInit(): void {
  }

}
