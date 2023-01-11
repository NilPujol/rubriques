import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Criteri } from '../../model/entitats/implementacions/Criteri';
import { Valoracio } from '../../model/entitats/implementacions/Valoracio';

@Component({
  selector: 'app-valoracions',
  templateUrl: './valoracions.component.html',
  styleUrls: ['./valoracions.component.css']
})
export class ValoracionsComponent implements OnInit {
  valoracionsForm!: FormGroup;
  criterisLocalStorage!: string | null;
  criteris: Array<Number> = [];
  selectedOption: string = "";
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
    this.selectedOption = this.criteris[0].toString();
  }
  afegirValoracio(): void {
    let criteri = localStorage.getItem(this.selectedOption);
    let valoracions = [];
    let existent = false;
    if (criteri != null) {
      valoracions = JSON.parse(criteri);
      valoracions.forEach((valoracio: Valoracio) => {
        if (valoracio['valor'] == this.valoracionsForm.get("valor")?.value) {
          existent = true;
        }
      });
      if (!existent) {
        let valoracio = new Valoracio(this.valoracionsForm.get("descripcio")?.value, this.valoracionsForm.get("valor")?.value);
        valoracions.push(valoracio);
        localStorage.setItem(this.selectedOption, JSON.stringify(valoracions));
      }
    }
  }
}
