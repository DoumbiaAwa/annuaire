import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AddConseilComponent } from '../add-conseil/add-conseil.component';
@Component({
  selector: 'app-conseils',
  templateUrl: './conseils.component.html',
  styleUrls: ['./conseils.component.scss']
})



export class ConseilsComponent implements OnInit {

  constructor(private router: Router,   private dialog: MatDialog,
    private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
      
  }

  navigate(path : string){
    console.log("lol");
    
   this.router.navigate([path]);
  }

  openDialog() {
    const dialogRef = this.dialog.open(AddConseilComponent, {
      width: '900px',
      height: '500px',
      panelClass: 'warning-dialog',
      disableClose: true,
      position: {
        // top: '-35%',
        // left: '30%'
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // this.acteurs.push(result);
        this.cdr.detectChanges();
      }
    });
  }
}
