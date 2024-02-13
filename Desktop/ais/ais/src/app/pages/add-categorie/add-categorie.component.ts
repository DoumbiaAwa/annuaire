import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-categorie',
  templateUrl: './add-categorie.component.html',
  styleUrls: ['./add-categorie.component.scss']
})
export class AddCategorieComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<AddCategorieComponent>) { }

  ngOnInit(): void {
  }
  annuler(): void {
    this.dialogRef.close('annuler');
  }
}
