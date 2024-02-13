import { Component, OnInit } from '@angular/core';
import { CompteDetailComponent } from '../compte-detail/compte-detail.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.scss']
})
export class CompteComponent implements OnInit {

  constructor(private dialog: MatDialog) {}
  
  openDialog() {
    const dialogRef = this.dialog.open(CompteDetailComponent, {
      width: '528px', // or your desired width
      height: '400px', // or your desired height
      // disableClose: true,
      panelClass: 'warning-dialog',
      position: {
      top: '-10%',
      left: '40%',
      
      },
    });
  }
  
  ngOnInit(): void {

  }

}
