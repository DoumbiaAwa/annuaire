import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-add-zone',
  templateUrl: './add-zone.component.html',
  styleUrls: ['./add-zone.component.scss']
})
export class AddZoneComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<AddZoneComponent>) { }

  ngOnInit(): void {
  }
  annuler(): void {
    this.dialogRef.close('annuler');
  }

}
