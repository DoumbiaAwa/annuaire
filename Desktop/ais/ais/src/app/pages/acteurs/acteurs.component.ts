import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddActeurComponent } from '../add-acteur/add-acteur.component';
import { ActeurService } from 'src/app/services/acteur/acteur.service';

@Component({
  selector: 'app-acteurs',
  templateUrl: './acteurs.component.html',
  styleUrls: ['./acteurs.component.scss']
})
export class ActeursComponent implements OnInit {

  tableData2 = {
    headerRow: ['#', 'Name', 'Job Position', 'Salary', 'Active'],
    dataRows: [
      { id: 1, name: 'Andrew Mike', job_position: 'Develop', salary: '99,225', active: false },
      { id: 2, name: 'John Doe', job_position: 'Design', salary: '89,241', active: false },
      { id: 3, name: 'Alex Mike', job_position: 'Design', salary: '92,144', active: true },
      { id: 4, name: 'Mike Monday', job_position: 'Marketing', salary: '49,990', active: true }
    ]
  };

  constructor(private dialog: MatDialog, private acteurService: ActeurService) { }

  openDialog() {
    const dialogRef = this.dialog.open(AddActeurComponent, {
      width: '800px',
      height: '500px',
      panelClass: 'warning-dialog',
      position: {
        top: '-50%',
        left: '30%'
      },
    });
  }

  change() {
    // Toggle the 'active' property of each data row
    this.tableData2.dataRows.forEach(row => {
      row.active = !row.active;
    });
  }

  ngOnInit() {
    // Your initialization code here
  }
}
