import { GenericEntity } from './genericEntity';
import { CnhEntity } from './cnhEntity';
import { CampDriverEntity } from './campDriverEntity';
import { HistoricoLocalizacaoEntity } from './historicoLocalizacaoEntity';
import { PessoaEntity } from './pessoaEntity';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

export class MotoristaEntity extends GenericEntity {
    motivacao: string;
    cnh: CnhEntity;
    campDriver: CampDriverEntity[];
    historicoLocalizacao: HistoricoLocalizacaoEntity[];

    constructor() {
        super();
        this.motivacao = '';
        this.cnh = new CnhEntity();
        this.campDriver = [];
        this.historicoLocalizacao = [];
    }
}
