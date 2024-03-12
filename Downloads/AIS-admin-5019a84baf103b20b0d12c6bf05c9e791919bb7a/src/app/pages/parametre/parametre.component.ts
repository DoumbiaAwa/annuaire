import { Component, OnInit } from '@angular/core';
import { ParametreGenerauxService } from 'src/app/services/parametreGeneraux/parametre-generaux.service';
import { ParametreGeneraux } from 'src/app/model/parametreGeneraux';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-parametre',
  templateUrl: './parametre.component.html',
  styleUrls: ['./parametre.component.scss']
})
export class ParametreComponent implements OnInit {
  parametreGenerau: ParametreGeneraux[] = [];

  constructor(private parametreGenerauxService: ParametreGenerauxService) {}

  listeParametre() {
    this.parametreGenerauxService.getParametre().subscribe(
      (data: ParametreGeneraux[]) => {
        this.parametreGenerau = data;
        console.log('donne param', this.parametreGenerau);
        // Manually trigger change detection
      },
      error => {
        console.error(error);
      }
    );
  }

  ngOnInit(): void {
    this.listeParametre();
  }
}
