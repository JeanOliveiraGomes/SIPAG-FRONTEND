import { GenericEntity } from './genericEntity';

export class EnderecoEntity extends GenericEntity {
    cep: string;
    lougradouro: string;
    bairro: string;
    cidade: string;
    uf: string;
    complemento: string;

    constructor(){
        super();
        this.cep = '';
        this.lougradouro = '';
        this.bairro = '';
        this.cidade = '';
        this.uf = '';
        this.complemento = '';
    }
}
