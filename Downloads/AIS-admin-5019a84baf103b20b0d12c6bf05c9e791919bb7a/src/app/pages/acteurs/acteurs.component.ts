import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core'; import { MatDialog } from '@angular/material/dialog';
import { AddActeurComponent } from '../add-acteur/add-acteur.component';
import { ActeurService } from 'src/app/services/acteur/acteur.service';
import { TypeActeur } from 'src/app/model/typeActeur';

@Component({
  selector: 'app-acteurs',
  templateUrl: './acteurs.component.html',
  styleUrls: ['./acteurs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ActeursComponent implements OnInit {

  acteurs: TypeActeur[] = [];

  constructor(
    private dialog: MatDialog,
    private acteurService: ActeurService,
    private cdr: ChangeDetectorRef
  ) { }

  openDialog() {
    const dialogRef = this.dialog.open(AddActeurComponent, {
      width: '700px',
      height: '500px',
      panelClass: 'warning-dialog',
      position: {
        // top: '-35%',
        left: '30%'
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.acteurs.push(result);
        this.cdr.detectChanges();
      }
    });
  }

  getTypeActeur(): void {
    this.acteurService.getActeur().subscribe(
      (data: TypeActeur[]) => {
        this.acteurs = data;

        // Manually trigger change detection
        this.cdr.detectChanges();
      },
      error => {
        console.error(error);
      }
    );
  }

  supprimerActeur(idTypeActeur: number): void {
    this.acteurService.deleteType(idTypeActeur).subscribe(
      () => {
        console.log('Acteur supprimé avec succès');

        // Manually trigger change detection after deletion
        this.cdr.detectChanges();
      },
      error => {
        console.error('Erreur lors de la suppression de l\'acteur', error);
      }
    );
  }

  ngOnInit() {
    this.getTypeActeur();
  }
}
