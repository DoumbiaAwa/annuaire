import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-add-speculation',
  templateUrl: './add-speculation.component.html',
  styleUrls: ['./add-speculation.component.scss']
})
export class AddSpeculationComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<AddSpeculationComponent>) { }


  ngOnInit(): void {
  }
  annuler(){
    this.dialogRef.close();

  }

}
