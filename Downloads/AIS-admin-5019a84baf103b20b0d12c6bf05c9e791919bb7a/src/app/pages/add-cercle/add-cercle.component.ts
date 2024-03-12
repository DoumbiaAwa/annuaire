import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-add-cercle',
  templateUrl: './add-cercle.component.html',
  styleUrls: ['./add-cercle.component.scss']
})
export class AddCercleComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<AddCercleComponent>) { }

  ngOnInit(): void {
  }
annuler(){
  this.dialogRef.close();
}
}
