import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-add-commune',
  templateUrl: './add-commune.component.html',
  styleUrls: ['./add-commune.component.scss']
})
export class AddCommuneComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<AddCommuneComponent>) { }

  ngOnInit(): void {
  }
  annuler(){
    this.dialogRef.close();
  }
}
