import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ZoneProductionService } from 'src/app/services/zoneProduction/zone-production.service';
import { LoginService } from 'src/app/services/login/login.service';
import { Acteur } from 'src/app/model/acteur';

@Component({
  selector: 'app-add-zone',
  templateUrl: './add-zone.component.html',
  styleUrls: ['./add-zone.component.scss']
})
export class AddZoneComponent implements OnInit {

  zoneProductionForm: FormGroup;
  acteurCurrent: Acteur | undefined;
  acteur: Acteur | undefined;

  constructor(private dialogRef: MatDialogRef<AddZoneComponent>,
    private zoneProductionService: ZoneProductionService,
    private loginService: LoginService,
    private fb: FormBuilder) {

    this.acteurCurrent = this.loginService.getCurrentUser();

    this.zoneProductionForm = this.fb.group({
      nomZoneProduction: '',
      latitude: '',
      longitude: '',
      photoZone: '',
      acteur: this.acteurCurrent,
      // zone: ''
    })

  }

  ajoutZone() {
    const zoneProductionFormValue = this.zoneProductionForm.value;
    this.zoneProductionService.addzone(zoneProductionFormValue).subscribe(
      (data) => {
        console.log(data);
        this.dialogRef.close();
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

  ngOnInit(): void {
    // You can fetch the zone data here if needed
  }

}