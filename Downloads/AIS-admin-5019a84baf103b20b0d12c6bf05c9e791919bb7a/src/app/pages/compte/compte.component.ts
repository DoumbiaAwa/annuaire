import { Component, Input, OnInit, Output } from "@angular/core";
import { CompteDetailComponent } from '../compte-detail/compte-detail.component';
// import { MatDialog } from '@angular/material/dialog';
import { Router } from "@angular/router";
import { CompteService } from "src/app/services/compte/compte.service";
import { Acteur } from "src/app/model/acteur";
import { error } from "console";
@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.scss'],
})
export class CompteComponent implements OnInit {

  acteurs: Acteur[] = [];

  constructor(private router: Router, private compteService : CompteService) { }

 listeCompte() : void{
  this.compteService.getCompte().subscribe(
    (data: Acteur[]) => {
      this.acteurs =data;
      console.log ('compte', this.acteurs)

    },
    error => {
      console.error(error)
    }
  );
 }



  ngOnInit() {
    this.listeCompte();
  }

 

  navigate(path : string){
    console.log("lol");
    
   this.router.navigate([path]);
  }



}
