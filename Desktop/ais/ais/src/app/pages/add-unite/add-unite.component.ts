import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-add-unite',
  templateUrl: './add-unite.component.html',
  styleUrls: ['./add-unite.component.scss']
})
export class AddUniteComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<AddUniteComponent>) { }

  ngOnInit(): void {
    
  }

  annuler(): void {

    this.dialogRef.close('annuler');
  }

}
