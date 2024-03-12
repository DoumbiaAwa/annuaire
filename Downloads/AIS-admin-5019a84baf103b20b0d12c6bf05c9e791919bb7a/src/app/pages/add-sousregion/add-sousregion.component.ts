import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-add-sousregion',
  templateUrl: './add-sousregion.component.html',
  styleUrls: ['./add-sousregion.component.scss']
})
export class AddSousregionComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<AddSousregionComponent>) { }

  ngOnInit(): void {
  }
annuler(){
  this.dialogRef.close();
}
}
