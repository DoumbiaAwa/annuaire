import { Component, Input, OnInit, Output } from "@angular/core";
import { CompteDetailComponent } from '../compte-detail/compte-detail.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.scss'],
})
export class CompteComponent implements OnInit {

  data: any[] = [
    { photo: '', name: 'lorem', email:'lorem', type:'lorem' },
    // Ajoutez d'autres données selon vos besoins
  ];

  searchTerm: string = '';
  filteredData: any[] = [];


  constructor(private dialog: MatDialog) { }





  ngOnInit() {
    this.filteredData = this.data;
  }

  filterData(): void {
    this.filteredData = this.data.filter((item) =>
      item.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }




  openDialog() {
    const dialogRef = this.dialog.open(CompteDetailComponent, {
      width: '728px', // or your desired width
      height: '700px', // or your desired height
      // disableClose: true,
      panelClass: 'warning-dialog',
      position: {
        top: '-50%',
        left: '30%',

      },
    });
  }



}
