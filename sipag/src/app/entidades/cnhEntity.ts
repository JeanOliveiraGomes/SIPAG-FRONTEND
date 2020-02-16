import { GenericEntity } from './genericEntity';
import { MotoristaEntity } from './motoristaEntity';


export class CnhEntity extends GenericEntity {
    validade: Date;
    motorista: MotoristaEntity;

    constructor() {
        super();
    }
}
