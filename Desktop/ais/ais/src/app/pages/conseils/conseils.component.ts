import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ViewConseilsComponent } from 'src/app/view-conseils/view-conseils.component';
@Component({
  selector: 'app-conseils',
  templateUrl: './conseils.component.html',
  styleUrls: ['./conseils.component.scss']
})
export class ConseilsComponent implements OnInit {

  constructor(private dialog: MatDialog) {}
  
  openDialog() {
    const dialogRef = this.dialog.open(ViewConseilsComponent, {
      width: '728px', // or your desired width
      height: '100%', // or your desired height
      // disableClose: true,
      panelClass: 'warning-dialog',
      position: {
      // top: '-800%',
      left: '30%',
      
      },
    });
  }

  ngOnInit(): void {
      
  }

}
