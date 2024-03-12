import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CategoriService } from 'src/app/services/categori/categori.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login/login.service';
import { Acteur } from 'src/app/model/acteur';
import { FiliereService } from 'src/app/services/filiere/filiere.service';
import { Filiere } from 'src/app/model/filiere';
import { FormControl } from '@angular/forms';
import { CategorieProduit } from 'src/app/model/categorieProduit';
@Component({
  selector: 'app-add-categorie',
  templateUrl: './add-categorie.component.html',
  styleUrls: ['./add-categorie.component.scss']
})
export class AddCategorieComponent implements OnInit {

  categoriForm: FormGroup;
  categoriData: CategorieProduit[];
  acteurCurrent: Acteur | undefined;
  filieres: Filiere[] = [];
  
  constructor(
    private dialogRef: MatDialogRef<AddCategorieComponent>,
    private categoriService: CategoriService,
    private loginService: LoginService,
    private fb: FormBuilder,
    private filiereService: FiliereService
  ) {
    this.acteurCurrent = this.loginService.getCurrentUser();
    this.categoriForm = this.fb.group({
      libelleCategorie: ['', Validators.required],
      descriptionCategorie: ['', Validators.required],
      libelleFiliere: ['', Validators.required],
      // filiere: ['', Validators.required],
      acteur: this.acteurCurrent
    });
    this.loadFilieres();
  }

  ajoutCategorie() {

    if (this.categoriForm.get('libelleCategorie')) {

      const categoriFormValue = this.categoriForm.value;
      this.categoriService.addCategorie(categoriFormValue).subscribe(
        (data) => {
          console.log(data);
          this.dialogRef.close();
        },
        (error) => {
          console.error('Error:', error);
          // Handle the error here, e.g., display an error message to the user
        }
      );
    } else {
      console.error('Error: Filiere is not set');
      // Display an error message to the user
    }
  }


  ngOnInit(): void {
    this.loadFilieres();
  }

  loadFilieres() {
    this.filiereService.getFiliere().subscribe(
      (data: Filiere[]) => {
        this.filieres = data;
      },
      (error) => {
        console.error('Error fetching filieres:', error);
      }
    );
  }

  annuler(): void {
    this.dialogRef.close('annuler');
  }
}
