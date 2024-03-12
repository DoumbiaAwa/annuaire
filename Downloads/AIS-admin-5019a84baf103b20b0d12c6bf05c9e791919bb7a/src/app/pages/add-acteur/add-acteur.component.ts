import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ActeurService } from 'src/app/services/acteur/acteur.service';
import { TypeActeur } from 'src/app/model/typeActeur';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-add-acteur',
  templateUrl: './add-acteur.component.html',
  styleUrls: ['./add-acteur.component.scss']
})
export class AddActeurComponent implements OnInit {

  acteurForm: FormGroup;
  acteurData:  TypeActeur[] ;


  constructor(private dialogRef: MatDialogRef<AddActeurComponent>, private acteurService: ActeurService, private fb: FormBuilder) {
    this.acteurForm = this.fb.group({

      libelle: ['', Validators.required], 
      descriptionTypeActeur: ['', Validators.required],
      // statutTypeActeur: '',
      // personneModif:'',

    });
  }

  ngOnInit(): void {


    // this.ajout();
  }

  ajout() {
    if (this.acteurForm.valid) {
      const acteurFormValue = this.acteurForm.value;
      this.acteurService.addType(acteurFormValue).subscribe(
        (data) => {
          console.log(data);
          this.dialogRef.close(this.acteurData);
        },
        (error) => {
          console.error('Error:', error);
        }
      );
    } else {
    }
  }



  annuler(): void {
    this.dialogRef.close('annuler');
  }

}
