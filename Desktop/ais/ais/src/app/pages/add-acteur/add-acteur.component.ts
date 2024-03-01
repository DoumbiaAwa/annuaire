import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ActeurService } from 'src/app/services/acteur/acteur.service';
import { TypeActeur } from 'src/app/model/acteur';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-add-acteur',
  templateUrl: './add-acteur.component.html',
  styleUrls: ['./add-acteur.component.scss']
})
export class AddActeurComponent implements OnInit {
  acteurForm: FormGroup;
  acteurData: TypeActeur[];

  
  constructor(private dialogRef: MatDialogRef<AddActeurComponent>, private acteurService:ActeurService, private fb: FormBuilder) {
    this.acteurForm = this.fb.group({ 
  
      libelle: '',
      descriptionTypeActeur: '', 
      // statutTypeActeur: '',
      // personneModif:'',
   
     });
   }

  ngOnInit(): void {

  
    // this.ajout();
  }

  ajout() {
    const acteurFormValue = this.acteurForm.value;
    this.acteurService.addType(acteurFormValue).subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.error('Error:', error);
        // Handle the error here, e.g., display an error message to the user
      }
    );
  }
  


  annuler(): void {
    this.dialogRef.close('annuler');
  }

}
