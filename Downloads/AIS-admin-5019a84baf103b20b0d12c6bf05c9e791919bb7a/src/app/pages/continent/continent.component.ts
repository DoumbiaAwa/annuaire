import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddContinentComponent } from '../add-continent/add-continent.component';
import { ContinentService } from 'src/app/services/continent/continent.service';
import { Continent } from 'src/app/model/continent';
@Component({
  selector: 'app-continent',
  templateUrl: './continent.component.html',
  styleUrls: ['./continent.component.scss']
})
export class ContinentComponent implements OnInit {
  continents : Continent[] = [];

  constructor(private dialog: MatDialog, private  continentService: ContinentService) { }
  
  openDialog() {
    const dialogRef = this.dialog.open(AddContinentComponent  , {
      width: '700px',
      height: '600px',
      panelClass: 'warning-dialog',
      position: { 
      top: '-20%',
      left: '35%'
     },
    });
  }

  ngOnInit(): void {
  }

}
