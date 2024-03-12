import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddZoneComponent } from '../add-zone/add-zone.component';
import { ZoneProduction } from 'src/app/model/zoneProduction';
import { ZoneProductionService } from 'src/app/services/zoneProduction/zone-production.service';
@Component({
  selector: 'app-zone-production',
  templateUrl: './zone-production.component.html',
  styleUrls: ['./zone-production.component.scss']
})
export class ZoneProductionComponent implements OnInit {
  
  zone : ZoneProduction[] =[];
  
  constructor(private dialog: MatDialog,
    private zoneProductionService: ZoneProductionService,
    ) {}

    // getzoneProduction(): void {
    //   this.zoneProductionService.getZone().subscribe(
    //     (data: ZoneProduction[]) => {
    //       this.zone = data;
  
    //     },
    //     error => {
    //       console.error(error);
    //     }
    //   );
    // }
    
  openDialog() {
    const dialogRef = this.dialog.open(AddZoneComponent, {
      width: '700px',
      height: '750px',
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
