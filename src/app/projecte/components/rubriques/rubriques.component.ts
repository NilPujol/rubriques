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
          criterisLocalStorage.forEach((ValoracioLS: any[]) => {
            let ValoracioTMP = new Valoracio(ValoracioLS[0], ValoracioLS[1]);
            if (!this.valorsCapcalera.includes(ValoracioLS[1])) {
              this.valorsCapcalera.push(ValoracioLS[1]);
            }
            fila.push(ValoracioTMP);
          });
          this.taula.push(fila);
        }
      });
    }
    this.mostrar();
  }
  mostrar() {
    console.log(this.taula);
    this.valorsCapcalera.sort((a, b) => a - b);
    console.log(this.valorsCapcalera);
  }
  guardarSeleccionats(criteri: string, valor: number) {

  }
}
