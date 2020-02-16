import { GenericEntity } from './genericEntity';
import { EnderecoEntity } from './enderecoEntity';
import { EmailEntity } from './emailEntity';
import { TelefoneEntity } from './telefoneEntity';

export class EstabelecimentoEntity extends GenericEntity{
    nome: string;
    cnpj: string;
    enderecos: EnderecoEntity[];
    email: EmailEntity[];
    telefone: TelefoneEntity[];

    constructor(){
        super();
        this.nome = '';
        this.cnpj = '';
        this.enderecos = [];
        this.email = [];
        this.telefone = [];
    }
}