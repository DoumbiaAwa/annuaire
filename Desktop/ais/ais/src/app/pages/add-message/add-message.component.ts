import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-add-message',
  templateUrl: './add-message.component.html',
  styleUrls: ['./add-message.component.scss']
})
export class AddMessageComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<AddMessageComponent>) { }

  ngOnInit(): void {
  }
  annuler(): void {
    this.dialogRef.close('annuler');
  }


}
