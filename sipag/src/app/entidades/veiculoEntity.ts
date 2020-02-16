import { PessoaEntity } from "./pessoaEntity";
import { GenericEntity } from "./genericEntity";

export class VeiculoEntity extends GenericEntity {
    placa: string;
    anoFabricacao: number;
    cor: string;
    condicaoPintura: string;
    marca: string;

    proprietario: PessoaEntity;

    constructor() {
        super();
        this.placa = '';
        this.cor = '';
        this.condicaoPintura = '';
        this.marca = '';
}
}
