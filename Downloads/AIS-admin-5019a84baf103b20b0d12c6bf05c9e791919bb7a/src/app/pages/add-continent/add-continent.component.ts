import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { ContinentService } from 'src/app/services/continent/continent.service';
import { Continent } from 'src/app/model/continent';
@Component({
  selector: 'app-add-continent',
  templateUrl: './add-continent.component.html',
  styleUrls: ['./add-continent.component.scss']
})
export class AddContinentComponent implements OnInit {
 
  continentForm:  FormGroup;
  continentData: Continent[];
  constructor(private dialogRef: MatDialogRef<AddContinentComponent>,
    private continentService: ContinentService,
    private fb: FormBuilder) {
      this.continentForm = this.fb.group({
        nomContinent: '',
        descriptionContinent: '',
      })
     }
// ajoutContinent(){
//   const continentFormValue = this.continentForm.value;
//   this.continentService.addContinent(continentFormValue).subscribe((data) =>{
//     console.log(data);
//     if (data['success']) {
//   }

ajoutContinent() {
  const continentFormValue = this.continentForm.value;
  this.continentService.addContinent(continentFormValue).subscribe(
    (data) => {
      console.log(data);
      this.dialogRef.close();
    },
    (error) => {
      console.error('Error:', error);
    }
  );
}
  ngOnInit(): void {

  }
  annuler() {
    this.dialogRef.close()
  }
}
