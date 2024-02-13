import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-view-conseils',
  templateUrl: './view-conseils.component.html',
  styleUrls: ['./view-conseils.component.scss']
})
export class ViewConseilsComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<ViewConseilsComponent>) { }

  ngOnInit(): void {
  }
  annuler(): void {
    this.dialogRef.close('annuler');
  }

}
