import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-add-pays',
  templateUrl: './add-pays.component.html',
  styleUrls: ['./add-pays.component.scss']
})
export class AddPaysComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<AddPaysComponent>) { }

  ngOnInit(): void {
    
  }

  annuler(): void {

    this.dialogRef.close('annuler');
  }

}
