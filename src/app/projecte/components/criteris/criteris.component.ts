import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Criteri } from '../../model/entitats/implementacions/Criteri';
import { ValoracionsComponent } from '../valoracions/valoracions.component';
@Component({
  selector: 'app-criteris',
  templateUrl: './criteris.component.html',
  styleUrls: ['./criteris.component.css']
})
export class CriterisComponent implements OnInit {
  criterisForm!: FormGroup;
  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.criterisForm = this.fb.group({
      titol: ['',
        {
          validators: [
            Validators.required,
          ]
        }
      ],
    })
  }
  afegirCriteri() {
    let criterisActuals = localStorage.getItem('criteris');
    let criterisfinals = [];
    if (criterisActuals != null) {
      criterisfinals = JSON.parse(criterisActuals);
      if (criterisActuals.includes(this.criterisForm.get("titol")?.value)) { return; }
      criterisfinals.push(this.criterisForm.get("titol")?.value);
      localStorage.setItem('criteris', JSON.stringify(criterisfinals));
      localStorage.setItem(this.criterisForm.get("titol")?.value, JSON.stringify([]));
    } else {
      localStorage.setItem('criteris', JSON.stringify([this.criterisForm.get("titol")?.value]));
      localStorage.setItem(this.criterisForm.get("titol")?.value, JSON.stringify([]));
    }

  }
}
