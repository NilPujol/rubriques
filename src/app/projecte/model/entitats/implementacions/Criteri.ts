import { ICriteri } from "../interficies/ICriteri";
import { Valoracio } from "./Valoracio";

export class Criteri implements ICriteri {
    titol!: string;
    valoracions: Array<Valoracio>;
    constructor(titol: string, valoracions: Array<Valoracio>) {
        this.titol = titol;
        this.valoracions = valoracions;
    }
}