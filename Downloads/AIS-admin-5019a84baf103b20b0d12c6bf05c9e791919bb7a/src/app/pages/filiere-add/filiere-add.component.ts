import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Filiere } from 'src/app/model/filiere';
import { FiliereService } from 'src/app/services/filiere/filiere.service';
import { Acteur } from 'src/app/model/acteur';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-filiere-add',
  templateUrl: './filiere-add.component.html',
  styleUrls: ['./filiere-add.component.scss']
})
export class FiliereAddComponent implements OnInit {
  filiereForm: FormGroup;
  filiereData: Filiere[];
  acteurCurrent: Acteur | undefined;
  acteur: Acteur | undefined;

  constructor(private dialogRef: MatDialogRef<FiliereAddComponent>,private fb: FormBuilder, private loginService: LoginService,
    private filiereService:FiliereService) {

      this.acteurCurrent = this.loginService.getCurrentUser();
      
    this.filiereForm = this.fb.group({ 
      libelleFiliere: '',
      descriptionFiliere: '', 
      acteur : this.acteurCurrent 
     });
   }
   

 


  ngOnInit(): void {
   
  }

ajoutfiliere(){
  const filiereFormValue = this.filiereForm.value;
    this.filiereService.addfiliere(filiereFormValue).subscribe(
      (data) => {
        this.dialogRef.close();
      },
      (error) => {
        console.error('Error:', error);
        // Handle the error here, e.g., display an error message to the user
      }
    );
}

  annuler(){
    this.dialogRef.close();
  }

}
