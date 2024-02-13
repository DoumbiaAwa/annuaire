import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-filiere-add',
  templateUrl: './filiere-add.component.html',
  styleUrls: ['./filiere-add.component.scss']
})
export class FiliereAddComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<FiliereAddComponent>) { }
  ngOnInit(): void {
  }

}
