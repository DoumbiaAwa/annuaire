import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-demande-message',
  templateUrl: './demande-message.component.html',
  styleUrls: ['./demande-message.component.scss'],
})



export class DemandeMessageComponent implements OnInit {

 
 
  constructor(private dialogRef: MatDialogRef<DemandeMessageComponent>) { }

  ngOnInit(): void {
  }
  annuler(): void {
    this.dialogRef.close('annuler');
  }

}
