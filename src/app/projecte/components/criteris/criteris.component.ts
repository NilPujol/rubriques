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
  criteris: Array<Criteri> = []
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
    if (criterisActuals != null) {
      this.criteris = JSON.parse(criterisActuals);
      this.criteris.push(new Criteri(this.criterisForm.get("titol")?.value, []));
    } else {
      this.criteris.push(new Criteri(this.criterisForm.get("titol")?.value, []));
    }
    localStorage.setItem('criteris', JSON.stringify(this.criteris));
  }

}
