import { EnderecoEntity } from "./enderecoEntity";
import { GenericEntity } from "./genericEntity";
import { PerfilEntity } from "./perfilEntity";

export class PessoaEntity extends GenericEntity {
    nome: string;
    email: string;
    cpf: string;
    dataNascimento: Date;
    telefone: string;
    endereco: EnderecoEntity[];
    perfil: PerfilEntity[];
    isAccountNonExpired: boolean;
    isAccountNonLocked: boolean;
    isCredentialsNonExpired: boolean;
    isEnabled: boolean;
    password: string;

    constructor() {
        super();
        this.nome = '';
        this.email = '';
        this.cpf = '';
        this.telefone = '';
        this.perfil = [];
        this.endereco = [];
        this.password = '';
    }
}
