import { Component, OnInit } from '@angular/core';
import { AddCommuneComponent } from '../add-commune/add-commune.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-commune',
  templateUrl: './commune.component.html',
  styleUrls: ['./commune.component.scss']
})
export class CommuneComponent implements OnInit {

  constructor(private dialog: MatDialog) {}
  
  openDialog() {
    const dialogRef = this.dialog.open(AddCommuneComponent , {
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
