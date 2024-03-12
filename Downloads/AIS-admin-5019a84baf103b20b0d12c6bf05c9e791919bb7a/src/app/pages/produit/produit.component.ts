import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FiliereAddComponent } from 'src/app/pages/filiere-add/filiere-add.component';
import { FiliereService } from 'src/app/services/filiere/filiere.service';
import { Filiere } from 'src/app/model/filiere';
@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.scss']
})
export class ProduitComponent implements OnInit {

filieres: Filiere[] =[];
  constructor(private dialog: MatDialog, private filiereService: FiliereService) {}
  


  openDialog() {
    const dialogRef = this.dialog.open(FiliereAddComponent, {
      width: '800px',
      height: '500px',
      panelClass: 'warning-dialog',
      position: { 
      top: '-35%',
       left: '30%' },
    });
  }
  
  listeFielire() : void{
    this.filiereService.getFiliere().subscribe(
      (data: Filiere[]) =>{
        this.filieres =data;
        console.log ('filiere', this.filieres)

      },
      error => {
        console.error(error)
      }
    )
  }
  
  ngOnInit(): void {
    this.listeFielire();
  }

}
