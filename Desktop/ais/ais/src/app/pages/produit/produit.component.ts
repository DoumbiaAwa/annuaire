import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FiliereAddComponent } from 'src/app/pages/filiere-add/filiere-add.component';
@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.scss']
})
export class ProduitComponent implements OnInit {

  constructor(private dialog: MatDialog) {}
  
  openDialog() {
    const dialogRef = this.dialog.open(FiliereAddComponent, {
      width: '700px',
      height: '500px',
      panelClass: 'warning-dialog',
      position: { 
      top: '-25%',
       left: '35%' },
    });
  }
  
  
  ngOnInit(): void {
  }

}
