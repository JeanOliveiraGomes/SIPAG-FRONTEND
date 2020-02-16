import { GenericEntity } from "./genericEntity";
import { EnderecoEntity } from "./enderecoEntity";
import { PessoaEntity } from './pessoaEntity';

export class ClienteEntity extends GenericEntity {
    nome: string;
    segmento: string;
    endereco: EnderecoEntity[];
    porte: string;
    status: boolean;
    consultor: PessoaEntity;


    constructor() {
        super();
        this.nome = '';
        this.segmento = '';
        this.porte = '';
        this.endereco = [];
    }
}
