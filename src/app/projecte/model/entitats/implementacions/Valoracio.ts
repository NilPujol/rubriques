import { IValoracio } from "../interficies/IValoracio";

export class Valoracio implements IValoracio {
  descripcio: string;
  valor: number;
  isSelected: boolean;
  constructor(descripcio: string, valor: number, isSelected = false) {
    this.descripcio = descripcio;
    this.valor = valor;
    this.isSelected = isSelected;
  }
}
