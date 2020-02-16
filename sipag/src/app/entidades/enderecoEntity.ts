import { GenericEntity } from './genericEntity';

export class EnderecoEntity extends GenericEntity {
    cep: string;
    bairro: string;
    complemento: string;
    uf: string;

    constructor(){
        super();
        this.cep = '';
        this.bairro = '';
        this.complemento = '';
        this.uf = '';
    }
}
