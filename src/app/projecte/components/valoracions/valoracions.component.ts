import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Criteri } from '../../model/entitats/implementacions/Criteri';

@Component({
  selector: 'app-valoracions',
  templateUrl: './valoracions.component.html',
  styleUrls: ['./valoracions.component.css']
})
export class ValoracionsComponent implements OnInit {
  valoracionsForm!: FormGroup;
  criterisLocalStorage!: string | null;
  criteris: Array<Criteri> = [];
  selectedOption?: string;
  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.criterisLocalStorage = localStorage.getItem('criteris');
    if (this.criterisLocalStorage != null) {
      this.criteris = JSON.parse(this.criterisLocalStorage);
    }
    this.valoracionsForm = this.fb.group({
      descripcio: ['',
        {
          validators: [
            Validators.required,
          ]
        }
      ],
      valor: ['',
        {
          validators: [
            Validators.required,
          ]
        }
      ],
    })
    this.selectedOption = this.criteris[0].titol;
  }
  afegirValoracio(): void {
    for (var i = 0; i < this.criteris.length; i++) {
      if (this.criteris[i].titol == this.selectedOption) {
        this.criteris[i].valoracions.push(this.valoracionsForm.get("descripcio")?.value, this.valoracionsForm.get("valor")?.value);
      }
    }
    localStorage.setItem('criteris', JSON.stringify(this.criteris));
  }
}
