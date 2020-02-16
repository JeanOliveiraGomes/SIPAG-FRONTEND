import { GenericEntity } from './genericEntity';
import { Timestamp } from 'rxjs';
import { CampanhaEntity } from './campanha';
import { MotoristaEntity } from './motoristaEntity';
import { PessoaEntity } from './pessoaEntity';

export class CampDriverEntity extends GenericEntity {
    dataInicio: Date;
    dataFim: Date;
    campanha: CampanhaEntity;
    pessoa: PessoaEntity;

    constructor() {
        super();
    }
}
