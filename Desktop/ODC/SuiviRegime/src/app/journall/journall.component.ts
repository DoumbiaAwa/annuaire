import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PagePlatComponent } from 'src/app/pageplat/pageplat.component'; 
import { FormService } from 'src/app/form.service';
import { FormGroup } from '@angular/forms';
import { FormBuilder,  FormControl } from '@angular/forms';
import { Pageplat } from 'src/app/pageplat';

@Component({
  selector: 'app-journall',
  templateUrl: './journall.component.html',
  styleUrls: ['./journall.component.scss']
})
export class JournallComponent implements OnInit {
  // dataEntries: { image: string, name: string, des: string, calorie: number}[] = [];
  @Input() savedForms: any[] = [];

  constructor(private dialog: MatDialog, private formService: FormService) {}

  // deleteEntry(index: number) {
  //   this.dataEntries.splice(index, 1);
  // }

  ngOnInit(): void {
    const savedFormsFromLocalStorage = localStorage.getItem('savedForms');
    if (savedFormsFromLocalStorage) {
      this.savedForms = JSON.parse(savedFormsFromLocalStorage);
    }
  }
  openDialog() {
    const dialogRef =this.dialog.open(PagePlatComponent, {
      width: '600px'
    })
    
  }
// supprimer un élément
deleteDish (index: number): void {
  this.formService.deleteDish(index);
  this.savedForms = this.formService.getSavedForms();
console.log(this.formService.getSavedForms())

}
// deletePlat(plat : Pageplat){
//   this.formService.supprimerPlat(plat);
//   console.error('impossible de supprimer')
// }
 
}