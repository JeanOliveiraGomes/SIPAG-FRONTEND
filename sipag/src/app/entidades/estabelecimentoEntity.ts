import { GenericEntity } from './genericEntity';
import { EnderecoEntity } from './enderecoEntity';
import { EmailEntity } from './emailEntity';

export class EstabelecimentoEntity extends GenericEntity{
    nome: string;
    cnpj: string;
    endereco: EnderecoEntity;
    email: EmailEntity[];
    telefone: any[];
}