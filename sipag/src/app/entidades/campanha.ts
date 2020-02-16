import { GenericEntity } from './genericEntity';
import { Data } from '@angular/router';
import { ClienteEntity } from './clienteEntity';

export class CampanhaEntity extends GenericEntity {
    nome: string;
    dataInicio: Date;
    dataFim: Date;
    valorCampanha: Date;
    status: boolean;
    cliente: ClienteEntity[];

    constructor() {
        super();
        this.nome = '';
        this.cliente = [];
    }
}
