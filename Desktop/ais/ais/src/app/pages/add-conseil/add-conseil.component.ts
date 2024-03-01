import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-conseil',
  templateUrl: './add-conseil.component.html',
  styleUrls: ['./add-conseil.component.scss']
})
export class AddConseilComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<AddConseilComponent>) { }


  ngOnInit(): void {

  }

  annuler(){
    
    this.dialogRef.close();
  }

}
