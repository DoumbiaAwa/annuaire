import { Component, OnInit } from '@angular/core';
import { AddMessageComponent } from '../add-message/add-message.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  constructor(private dialog: MatDialog) {}
  
  openDialog() {
    const dialogRef = this.dialog.open(AddMessageComponent , {
      width: '528px',
      height: '500px',
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
