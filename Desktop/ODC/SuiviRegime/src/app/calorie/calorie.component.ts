import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-calorie',
  templateUrl: './calorie.component.html',
  styleUrls: ['./calorie.component.scss']
})
export class CalorieComponent implements OnInit {
  calorieform!: FormGroup;
  genre: string = '';
  resultat: any;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.calorieform = this.fb.group({
      poid: ['', Validators.required],
      taille: ['', Validators.required],
      age: ['', Validators.required],
      genre: ['féminin', Validators.required] 
    });
  }

  calcul() {
    const poid = this.calorieform.get('poid')?.value;
    const taille = this.calorieform.get('taille')?.value;
    const age = this.calorieform.get('age')?.value;
    const genre = this.calorieform.get('genre')?.value;

    
    if (genre === 'féminin') {
      this.resultat = 447.593 + 9.247 * poid + 3.098 * taille - 4.33 * age;
    } else if (genre === 'masculin') {
      this.resultat = 88.362 + 13.397 * poid + 4.799 * taille - 5.677 * age;
    }
    console.log('Résultat calculé:', this.resultat); 
  }

  onSubmit() {
    this.calcul();
  }
}
