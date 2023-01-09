import { ICriteri } from "../interficies/ICriteri";
import { IValoracio } from "../interficies/IValoracio";

export class Valoracio implements IValoracio {
    descripcio!: string;
    valor!: number;
    constructor(descripcio: string, valor: number) {
        this.descripcio = descripcio;
        this.valor = valor;
    }
}