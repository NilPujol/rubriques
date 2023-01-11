import { Component, OnInit } from '@angular/core';
import { Valoracio } from '../../model/entitats/implementacions/Valoracio';

@Component({
  selector: 'app-rubriques',
  templateUrl: './rubriques.component.html',
  styleUrls: ['./rubriques.component.css']
})
export class RubriquesComponent implements OnInit {
  valorsCapcalera: Array<number> = [];
  taula = new Array<Array<Valoracio>>;
  criteris = new Array<string>;
  mitjana = 0;
  constructor() { }

  ngOnInit(): void {
    let criterisActuals = localStorage.getItem('criteris');
    if (criterisActuals != null) {
      this.criteris = JSON.parse(criterisActuals);
      this.criteris.forEach((criteri: String) => {
        let criterisTemp = localStorage.getItem(criteri.toString());
        if (criterisTemp != null) {
          let criterisLocalStorage = JSON.parse(criterisTemp);
          criterisLocalStorage = criterisLocalStorage.sort(function (a: number[], b: number[]) {
            return a[1] - b[1];
          });
          let fila = new Array<Valoracio>;
          criterisLocalStorage.forEach((ValoracioLS: Valoracio) => {
            if (!this.valorsCapcalera.includes(ValoracioLS['valor'])) {
              this.valorsCapcalera.push(ValoracioLS['valor']);
            }
            fila.push(ValoracioLS);
          });
          this.taula.push(fila);
        }
      });
    }
    this.valorsCapcalera.sort((a, b) => a - b);
    this.calcularMitjana();
  }
  guardarSeleccionats(criteri: string, valor: number) {
    this.taula[this.criteris.indexOf(criteri)].forEach(valoracio => {
      valoracio.isSelected = valoracio.valor == valor;
      localStorage.setItem(criteri, JSON.stringify(this.taula[this.criteris.indexOf(criteri)]));
    });
    this.calcularMitjana();
  }
  calcularMitjana() {
    let suma = 0;
    let numCriteris = 0;
    this.taula.forEach(criteri => {
      criteri.forEach(valoracio => {
        if (valoracio.isSelected) {
          suma += valoracio.valor;
        }
      });
      numCriteris++;
    });
    if (numCriteris == 0) { numCriteris = 1 }
    this.mitjana = suma / numCriteris;
  }
}
