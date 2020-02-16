import { EnderecoEntity } from "./enderecoEntity";
import { VeiculoEntity } from "./veiculoEntity";
import { GenericEntity } from "./genericEntity";
import { PerfilEntity } from "./perfilEntity";
import { MotoristaEntity } from './motoristaEntity';
import { CampDriverEntity } from './campDriverEntity';

export class PessoaEntity extends GenericEntity {
    nome: string;
    email: string;
    cpf: string;
    dataNascimento: Date;
    telefone: string;
    endereco: EnderecoEntity[];
    veiculo: VeiculoEntity[];
    motorista: MotoristaEntity;
    campDriver: CampDriverEntity[];
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
        this.veiculo = [];
        this.perfil = [];
        this.endereco = [];
        this.motorista = new MotoristaEntity();
        this.campDriver = [];
        this.password = '';
    }
}
