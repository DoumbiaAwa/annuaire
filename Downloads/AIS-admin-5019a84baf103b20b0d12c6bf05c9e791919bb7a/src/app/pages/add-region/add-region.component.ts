import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-add-region',
  templateUrl: './add-region.component.html',
  styleUrls: ['./add-region.component.scss']
})
export class AddRegionComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<AddRegionComponent>) { }

  ngOnInit(): void {
  }
annuler(){
  this.dialogRef.close()
}
}
