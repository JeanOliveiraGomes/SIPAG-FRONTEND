import { GenericEntity } from './genericEntity';
import { Timestamp } from 'rxjs';

export class HistoricoLocalizacaoEntity extends GenericEntity {
    timestamp: Timestamp<Date>;
    latitude: string;
    logitude: string;

    constructor()  {
        super();
        this.latitude = '';
        this.logitude = '';
    }
}
