import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-add-acteur',
  templateUrl: './add-acteur.component.html',
  styleUrls: ['./add-acteur.component.scss']
})
export class AddActeurComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<AddActeurComponent>) { }

  ngOnInit(): void {
  }
  annuler(): void {
    this.dialogRef.close('annuler');
  }

}
